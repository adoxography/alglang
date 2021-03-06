<?php

namespace App\Models\Phonology;

use App\Models\Phonology\ReflexGraph;
use App\Presenters\PhonemePresenter;
use App\Traits\Phonology\HasAllophones;
use App\Traits\Phonology\HasPhonemeType;
use App\Models\Words\Example;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Models\Language;
use App\Traits\Reconstructable;
use App\Traits\Sourceable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Phoneme extends Model
{
    use SoftDeletes, HasPhonemeType, RevisionableTrait, Bookmarkable, Sourceable, Reconstructable,
    HasAllophones, Searchable, BacksUp;

    public $table = 'Phon_Phonemes';
    public $uri = '/phonemes';

    protected $fillable = [
        'algoName',
        'ipaName',
        'orthoName',
        'phoneticNotes',
        'orthoNotes',
        'privateNotes',
        'isMarginal',
        'language_id',
        'featureable_type',
        'featureable_id',
        'isArchiphoneme',
        'archiphonemeDescription',
        'allophones'
    ];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'algoName', 'ipaName', 'orthoName', 'phoneticNotes', 'orthoNotes', 'privateNotes', 'archiphonemeDescription']);
    }

    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFields = [
        'isMarginal' => 'boolean:fully fledged|marginal'
    ];
    protected $revisionFormattedFieldNames = [
        'algoName'         => 'algonquianist transcription',
        'ipaName'          => 'IPA transcription',
        'orthoName'        => 'orthographic transcription',
        'phoneticNotes'    => 'phonetic notes',
        'orthoNotes'       => 'orthography notes',
        'privateNotes'     => 'private notes',
        'isMarginal'       => 'marginal',
        'phonemeable_type' => 'phoneme type',
        'phonemeable_id'   => 'features',
        'featureable_id'   => 'features',
        'archiphonemeDescription' => 'archiphoneme description'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->name;
    }

    public function getNameAttribute()
    {
        return $this->algoName;
    }

    public function getAlgoNameAttribute($value)
    {
        if ($this->isNull()) {
            return $value;
        }

        return $this->modifyIfReconstructed($value);
    }

    public function getTypeAttribute()
    {
        return $this->phonemeable->name;
    }

    public function getIpaNameAttribute($value)
    {
        if ($value) {
            return preg_replace('`^(/?)([^/\[\]]+)(/?)`', '/$2/', $this->modifyIfReconstructed($value));
        }

        return null;
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function features()
    {
        return $this->morphTo('featureable');
    }

    public function phonemeable()
    {
        return $this->morphTo('featureable');
    }

    public function featureable()
    {
        return $this->features();
    }

    public function allophones()
    {
        return $this->hasMany(Allophone::class);
    }

    public function examples()
    {
        return $this->belongsToMany(Example::class, 'example_phoneme')->withPivot('comments');
    }

    public function reflexes()
    {
        return $this->belongsToMany(
            Phoneme::class,
            with(new Reflex)->getTable(),
            'parent_id',
            'reflex_id'
        )->withPivot(['environment', 'id']);
    }

    public function parents()
    {
        return $this->belongsToMany(
            Phoneme::class,
            with(new Reflex)->getTable(),
            'reflex_id',
            'parent_id'
        )->withPivot(['environment', 'id']);
    }

    public function allParents()
    {
        $model = $this;

        return $this->parents()->with(['parents', 'allParents' => function ($query) use ($model) {
            $query->select("{$model->table}.*");
        }]);
    }

    public function paParents()
    {
        return $this->belongsToMany(Phoneme::class, 'Phon_PaParents', 'phoneme_id', 'parent_id');
    }

    public function allChildren()
    {
        $model = $this;

        return $this->reflexes()->with(['reflexes', 'allChildren' => function ($query) use ($model) {
            $query->select("{$this->table}.*");
        }]);
    }

    public function getReflexGraph()
    {
        return new ReflexGraph($this);
    }

    public function scopeOfType($query, $type)
    {
        if (is_array($type)) {
            for ($i = 0; $i < count($type); $i++) {
                $currType = $type[$i];

                if (!preg_match('/.Types/', $currType)) {
                    $currType .= 'Types';
                }

                if ($i == 0) {
                    $query->where('featureable_type', $currType);
                } else {
                    $query->orWhere('featureable_type', $currType);
                }
            }
        } else {
            if (!preg_match('/.Types/', $type)) {
                $type .= 'Types';
            }

            $query->where('featureable_type', $type);
        }
    }

    public function present(string $method = 'name')
    {
        return new PhonemePresenter($this, $method);
    }

    public function syncPaParents()
    {
        $parents = $this->findPaParents();

        $this->paParents()->sync($parents->pluck('id'));
    }

    protected function findPaParents()
    {
        $this->load('allParents');

        $parents = $this->allParents;
        $paParents = collect();

        while (!$parents->isEmpty()) {
            $parent = $parents->pop();

            if ($parent->language_id == 1) {
                $paParents->push($parent);
            } else {
                $parents = $parent->parents->concat($parents);
            }
        }

        return $paParents;
    }

    public function syncExamples($arr)
    {
        $examples = [];

        if (is_array($arr)) {
            foreach ($arr as $example) {
                $examples[$example['id']] = ['comments' => $example['comments']];
            }
        }

        $this->examples()->sync($examples);
    }

    public function isNull()
    {
        return $this->featureable_type === null;
    }
}
