<?php

namespace App\Models\Verbs;

use App\Models\Language;
use App\Models\Verbs\Structure;
use App\Models\Words\Form as WordForm;
use App\Presenters\Verbs\FormPresenter;
use App\Traits\Verbs\HasStructure;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructure;

    public $uri = 'verbs/forms';

    public $presenter = FormPresenter::class;

    public static $template = [
        'name' => '',
        'empty' => false,
        'language' => Language::class,
        'structure' => Structure::class,
        'parent' => Form::class
    ];

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have verb structures
        static::addGlobalScope('verb', function (Builder $builder) {
            $builder->where('structure_type', 'verbStructures');
        });
    }
}
