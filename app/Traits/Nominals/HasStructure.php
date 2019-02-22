<?php

namespace App\Traits\Nominals;

use App\Models\Nominals\Structure;

trait HasStructure {

	public static function bootHasStructure() {
		static::saving(function($model) {
			$model->assignStructure();
		});
	}

	public function structure()
	{
		return $this->belongsTo(Structure::class);
	}

	protected function assignStructure()
	{
		$this->structure_id   = $this->getStructure();
		$this->structure_type = 'nominalStructures';
	}

	protected function getStructure()
	{
		$rules = $this->parseStructureData(request()->all());

		$type = Structure::where($rules)->first();

		if(!$type) {
			$type = Structure::create(array_filter($rules, 'strlen'));
		}

		return $type->id;
	}

    protected function parseStructureData($attributes)
    {
    	$data = [];

        $data['pronominal_feature_id'] = $attributes['pronominal_feature_id'];
        $data['nominal_feature_id']    = $attributes['nominal_feature_id'];
        $data['paradigm_id']           = $attributes['paradigm_id'];

        return $data;
    }
}
