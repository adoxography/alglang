<?php

namespace App\Presenters\Nominals;

use App\Presenters\AlgPresenter;
use App\Models\Nominals\ParadigmTable;

class ParadigmPresenter extends AlgPresenter
{
	public function table()
	{
		$paradigm = new ParadigmTable($this->model->forms);
		$html = 'No forms yet';

		if(!$paradigm->isEmpty()) {
			$html = '<div class="paradigm-container"><table class="table is-bordered" style="display: block"><thead><tr><th>Features</th><th>Form</th></thead>';

			foreach($paradigm->rows[$this->model->name] as $arguments => $forms) {
				$html .= '<tr>';
				$html .= "<td>$arguments</td>";

				$html .= '<td>';
				foreach($forms as $form) {
					$html .= $form->present('link');

					if($form->structure_type == 'nominalStructures') {
						$html .= $form->printMorphemes();
					}
				}

				$html .= '</td>';
				$html .= '</tr>';
			}

			$html .= '</table></div>';
		}

		return $html;
	}	
}
