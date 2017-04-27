<?php

namespace App;

use App\Events\InitialChange\Creating;
use Illuminate\Database\Eloquent\Model;

class InitialChange extends Model
{
	use \App\DisambiguatableTrait;

    public $table = 'InitialChanges';
    protected $fillable = ['change', 'morpheme_id'];

    protected $disambiguatableFields = ['morpheme_id'];

    public function morpheme()
    {
    	return $this->belongsTo(Morpheme::class);
    }
}