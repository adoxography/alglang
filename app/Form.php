<?php

namespace App;

use App\Morpheme;
use App\ChangeType;
use App\Search\ColHeader;
use App\Search\RowHeader;
use App\Events\Form\Saved;
use App\Events\Form\Saving;
use App\Events\Form\Created;
use App\Events\Form\Deleted;
use App\Events\Form\Deleting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

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
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;
    use \App\HasMorphemesTrait;
    use \App\ReconstructableTrait;
    use \App\CognatableTrait;

    protected $sourceableTable = 'Sources_Forms';
    protected $morphemeTable = 'Forms_Morphemes';

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Forms';

    protected $fillable = [
        'allomorphyNotes',
        'changeType_id',
        'comments',
        'formType_id',
        'historicalNotes',
        'initialChange',
        'language_id',
        'morphemicForm',
        'parent_id',
        'phoneticForm',
        'surfaceForm',
        'usageNotes'
    ];

    protected $appends = ['uniqueName', 'uniqueNameWithLanguage'];

    protected $events = [
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

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
        'allomorphyNotes' => 'Allomorphy Notes',
        'comments'        => 'Comments',
        'formType_id'     => 'Syntax Details ID',
        'historicalNotes' => 'Historical Notes',
        'language_id'     => 'Language ID',
        'morphemicForm'   => 'Morphemes',
        'parent_id'       => 'Parent ID',
        'phoneticForm'    => 'Phonemic Representation',
        'surfaceForm'     => 'Surface Form',
        'usageNotes'      => 'Usage Notes'
    ];
    protected $dontKeepRevisionOf = [
        'complete'
    ];

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */

    /**
     * Modifies the surfaceForm attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @param string The original surfaceForm attribute
     * @return string The modified surfaceForm attribute
     */
    public function getSurfaceFormAttribute($value)
    {
        return $this->modifyIfReconstructed($value);
    }

    /**
     * Modifies the phoneticForm attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @param string The original phoneticForm attribute
     * @return string|null The modified phoneticForm attribute, or null if it doesn't exist
     */
    public function getPhoneticFormAttribute($value)
    {
        if($value) {
            return $this->modifyIfReconstructed($value);
        } else {
            return null;
        }
    }

    /**
     * Fetches the name of this example that is unique within its language
     *
     * Adds the arguments to the surfaceForm - while this doesn't guarantee that the name will be unique, it does make it very likely.
     *
     * @return string The surfaceForm followed by the form's arguments
     */
    public function getUniqueNameAttribute()
    {
        return "{$this->surfaceForm} ({$this->formType->getArguments()})";
    }

    /**
     * Fetches the unique name, followed by the language name
     *
     * @return string The unique name, followed by the language name
     */
    public function getUniqueNameWithLanguageAttribute()
    {
        return "{$this->uniqueName} ({$this->language->name})";
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    /**
     * Fetches the name of this example that is unique within its language
     *
     * @return string The surfaceForm followed by the form's arguments
     * @deprecated
     * @see Form::getUniqueNameAttribute()
     */
    public function uniqueName()
    {
        return $this->uniqueName;
    }

    /**
     * Fetches the unique name, followed by the language name
     *
     * @return string The unique name, followed by the language name
     * @deprecated
     * @see Form::getUniqueNameWithLanguageAttribute
     */
    public function uniqueNameWithLanguage()
    {
        return $this->uniqueNameWithLanguage;
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    public function formType()
    {
        return $this->belongsTo(FormType::class, 'formType_id');
    }

    public function parent()
    {
        return $this->belongsTo(Form::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Form::class, 'parent_id');
    }

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
}
