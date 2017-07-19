<?php

namespace Algling\Words\Models;

use Algling\Words\FormPresenter;
use Algling\Words\Models\Example;
use App\ChangeType;
use App\Language;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Laravel\Scout\Searchable;

/**
 * A verb form
 * 
 * @uses \App\SourceableTrait
 * @uses \App\HasMorphemesTrait
 * @uses \App\ReconstructableTrait
 * @uses \App\CognatableTrait
 */
class Form extends Model
{
    use Searchable;
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;
    use \Algling\Morphemes\Traits\HasMorphemesTrait;
    use \App\ReconstructableTrait;
    use \App\HasChildrenTrait;
    use \App\BacksUpTrait;
    use \App\BookmarkableTrait;
    use SoftDeletes;
    use \App\HideableTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Word_Forms';
    public $morphCode = 'forms';

    protected $fillable = [
        'allomorphyNotes',
        'changeType_id',
        'privateNotes',
        'structure_id',
        'structure_type',
        'historicalNotes',
        'language_id',
        'morphemicForm',
        'parent_id',
        'phonemicForm',
        'name',
        'usageNotes'
    ];

    protected $appends = ['html'];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'allomorphyNotes', 'privateNotes', 'historicalNotes', 'morphemicForm', 'phonemicForm', 'name', 'usageNotes']);
    }

    /*
    |--------------------------------------------------------------------------
    | Revision variables
    |--------------------------------------------------------------------------
    |
    | These are variable overrides used by the Revisionable trait.
    |
    */
    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFieldNames = [
        'allomorphyNotes' => 'allomorphy notes',
        'privateNotes'    => 'comments',
        'historicalNotes' => 'historical notes',
        'morphemicForm'   => 'morphemes',
        'parent_id'       => 'parent',
        'phonemicForm'    => 'phonemic representation',
        'name'            => 'surface form',
        'usageNotes'      => 'usage notes',
        'changeType_id'   => 'change type',
        'created_at'      => '[created]'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'complete',
        'created_at',
        'updated_at',
        'structure_type'
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */

    public function getCommentsAttribute()
    {
        return $this->privateNotes;
    }

    /**
     * Modifies the name attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @param string The original name attribute
     * @return string The modified name attribute
     */
    public function getSurfaceFormAttribute()
    {
        return $this->name;
    }

    public function getNameAttribute($value)
    {
        return $this->modifyIfReconstructed($value);

        // return preg_replace('/^([^A-Z]*)([A-Z]*)(.*)/', '<em>$1</em>$2<em>$3</em>', $name);
    }

    /**
     * Modifies the phoneticForm attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @param string The original phoneticForm attribute
     * @return string|null The modified phoneticForm attribute, or null if it doesn't exist
     */
    public function getPhonemicFormAttribute($value)
    {
        if($value) {
            return $this->modifyIfReconstructed($value);
        } else {
            return null;
        }
    }

    public function getPhoneticFormAttribute()
    {
        return $this->phonemicForm;
    }

    public function getDisplayAttribute()
    {
        return $this->present('unique')->then('language');
    }

    public function getHtmlAttribute()
    {
        return $this->present()->as('unique', 'link')->__toString();
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    public function isStemless()
    {
        if($this->morphemicForm) {
            return !$this->hasStem();
        } else {
            return $this->hasIdenticalExample();
        }
    }

    protected function hasStem()
    {
        $morphemes = $this->morphemes;
        $found = false;

        for($i = 0; $i < $morphemes->count() && !$found; $i++) {
            $found = $morphemes[$i]->slot->name == 'stem';
        }

        return $found;
    }

    protected function hasIdenticalExample()
    {
        $examples = $this->examples;
        $found = false;

        if($examples->count() == 1) {
            $found = $this->name == $this->examples->first()->name;
        }

        return $found;
    }

    public function generateExample(string $translation)
    {
        $exampleData = [
            'form_id'       => $this->id,
            'name'          => str_replace('*', '', $this->name),
            'phonemicForm'  => str_replace('*', '', $this->phonemicForm),
            'morphemicForm' => $this->morphemicForm,
            'translation'   => $translation
        ];

        if($this->parent_id && $this->parent->examples()->count() > 0) {
            $exampleData['parent_id'] = $this->parent->examples()->first()->id;
        }

        return $this->examples()->create($exampleData);
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function changeType()
    {
        return $this->belongsTo(ChangeType::class, 'changeType_id');
    }

    public function duplicates()
    {
        return $this->belongsToMany(Form::class, 'Forms_Duplicates', 'form_id', 'duplicate_id');
    }

    public function examples()
    {
        return $this->hasMany(Example::class, 'form_id');
    }

    public function formType()
    {
        return $this->structure();
    }

    public function structure()
    {
        return $this->morphTo();
    }

    public function present(string $method = 'name')
    {
        return new FormPresenter($this, $method);
    }
}
