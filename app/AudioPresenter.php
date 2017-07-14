<?php

namespace App;

use App\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class AudioPresenter extends AlgPresenter
{
	public function __construct(Model $model, string $method = 'player')
	{
		parent::__construct($model, $method);
	}

	public function player()
	{
		$link = $this->model->link;

		return sprintf('<audio controls="controls" src="%s"></audio>', $link);
	}
}