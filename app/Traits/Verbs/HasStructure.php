<?php

namespace App\Traits\Verbs;

use App\Models\Verbs\Structure;

trait HasStructure
{
    public static function bootHasStructure()
    {
        static::saving(function ($model) {
            /**
             * Only attempt to assign the form type if the data from a create or edit form
             * is present. (The FormRequest will have guaranteed that it is.) Skip
             * this otherwise - i.e. when the form is being disambiguated. That means that
             * the form already has a type, and it won't be altered anyway.
             */
            if (request()->subject_id) {
                $model->assignStructure();
            }
        });
    }

    public function structure()
    {
        return $this->belongsTo(Structure::class, 'structure_id');
    }

    protected function assignStructure()
    {
        $this->structure_id = $this->getStructure();
        $this->structure_type = 'verbStructures';
    }

    private function getStructure()
    {
        $data = $this->parseStructureData(request()->all());
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = Structure::where($data)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = Structure::create(array_filter($data, 'strlen'));
        }

        return $type->id;
    }

    private function parseStructureData($attributes)
    {
        $data['subject_id']         = $attributes['subject_id'];
        $data['primaryObject_id']   = $attributes['primaryObject_id'];
        $data['secondaryObject_id'] = $attributes['secondaryObject_id'];
        $data['mode_id']            = $attributes['mode_id'];
        $data['class_id']           = $attributes['verbClass_id'];
        $data['order_id']           = $attributes['order_id'];
        $data['isNegative']         = isset($attributes['isNegative']) ? 1 : 0;
        $data['isDiminutive']       = isset($attributes['isDiminutive']) ? 1 : 0;
        $data['isAbsolute']         = isset($attributes['isAbsolute']) ? $attributes['isAbsolute'] : null;
        $data['head']               = isset($attributes['head']) ? $attributes['head'] : null;

        return $data;
    }

    private function convertToRules($data)
    {
        $rules = [];

        foreach ($data as $key => $value) {
            if ($value === "") {
                $value = null;
            }
            array_push($rules, [$key, $value]);
        }

        return $rules;
    }
}
