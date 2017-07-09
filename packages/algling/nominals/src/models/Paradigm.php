<?php

namespace Algling\Nominals\Models;

use Algling\Nominals\Models\ParadigmType;
use Algling\Nominals\Models\Structure;
use Algling\Nominals\ParadigmPresenter;
use App\BookmarkableTrait;
use App\Language;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;

class Paradigm extends Model
{
	use SourceableTrait;
	use BookmarkableTrait;

    public $table = 'Nom_Paradigms';

    protected $fillable = ['name', 'language_id', 'paradigmType_id'];

    public function paradigmType()
    {
    	return $this->belongsTo(ParadigmType::class, 'paradigmType_id');
    }

    public function type()
    {
    	return $this->paradigmType();
    }

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function structures()
    {
    	return $this->hasMany(Structure::class);
    }

    public function present(string $method = 'name')
    {
        return new ParadigmPresenter($this, $method);
    }
}
