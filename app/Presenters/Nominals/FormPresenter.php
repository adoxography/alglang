<?php

namespace App\Presenters\Nominals;

use App\Presenters\Words\FormPresenter as WordFormPresenter;

class FormPresenter extends WordFormPresenter
{
    protected $uri = 'nominals/forms';

    public function unique(string $method = 'name', string $format = '')
    {
        $output = $this->model->present($method)->then('structure')->as('summary');

        if (strlen($format) > 0) {
            $output = $this->format($output, $format);
        }

        return $output;
    }
}
