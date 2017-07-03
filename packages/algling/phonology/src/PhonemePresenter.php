<?php

namespace Algling\Phonology;

use Algling\Phonology\Models\Phoneme;
use App\AlgPresenter;

class PhonemePresenter extends AlgPresenter {

	public function transcription($attribute = '')
	{
		$name = '';

		if(strlen($attribute) == 0) {
			$name = $this->model->ipaName ?: $this->model->algoName;
		} else {
			$name = $this->model->$attribute;
		}

		return preg_replace('`^(/?)(\*?)(/?)([^/\[\]]+)(/?)`', '$2/$4/', $name);
	}

	public function parentReflexes()
	{
		$output = '';

		// Make sure all of the relevant parents have been loaded
		$this->model->load('allParents');

		$lines = $this->generateParentLines($this->model);

		foreach($lines as $parents) {
			$output .= $this->printParentReflexLine($parents);
		}

		return sprintf('<ul>%s</ul>', $output);
	}

	public function childReflexes()
	{
		$output = '';

		$this->model->load('allChildren');

		$lines = $this->generateChildrenLines($this->model);

		foreach($lines as $children) {
			$output .= $this->printChildReflexLine($children);
		}

		return sprintf('<ul>%s</ul>', $output);
	}

	public function environment()
	{
		$output = '';

		if($this->model->pivot && $this->model->pivot->environment) {
			$output = '&nbsp/&nbsp' . $this->model->pivot->environment;
		}

		return $output;
	}

	protected function generateParentLines(Phoneme $phoneme)
	{
		$lines = [];

		if($phoneme->parents->count() > 0) {
			foreach($phoneme->parents as $parent) {
				$parentLines = $this->generateParentLines($parent);

				if(count($parentLines) > 0) {
					foreach($parentLines as $line) {
						$lines[] = array_merge($line, [$parent]);
					}
				} else {
					$lines[] = [$parent];
				}
			}
		}

		return $lines;
	}

	protected function generateChildrenLines(Phoneme $phoneme)
	{
		$lines = [];

		if($phoneme->reflexes->count() > 0) {
			foreach($phoneme->reflexes as $reflex) {
				$childrenLines = $this->generateChildrenLines($reflex);

				if(count($childrenLines) > 0) {
					foreach($childrenLines as $line) {
						$lines[] = array_merge([$reflex], $line);
					}
				} else {
					$lines[] = [$reflex];
				}
			}
		}

		return $lines;
	}

	protected function printParentReflexLine(array $parents)
	{

		$output = '';

		for($i = 0; $i < count($parents); $i++) {
			$parent = $parents[$i];

			$output .= $parent->present()->as('link', 'reflexes')
						->before('language');

			if($i > 0) {
				$output .= $parents[$i - 1]->present()->environment;
			}

			$output .= '&nbsp>&nbsp';
		}

		$output .= $this->model->present()->as('name', 'bold')
					->before('language');

		$output .= array_last($parents)->present('environment');

		$output .= sprintf('&nbsp(<a href="/reflexes/%d">Details</a>)', array_last($parents)->pivot->id);

		return sprintf('<li>%s</li>', $output);
	}

	protected function printChildReflexLine(array $children)
	{
		$output = $this->model->present()->as('name', 'bold')
					->before('language');

		foreach($children as $child) {
			$output .= '&nbsp>&nbsp' . $child->present()->as('link', 'reflexes')
						->before('language');

			$output .= $child->present('environment');
		}

		$output .= sprintf('&nbsp(<a href="/reflexes/%d">Details</a>)', array_first($children)->pivot->id);

		return sprintf('<li>%s</li>', $output);
	}

	protected function getURI()
	{
		$this->model->load('features');

		if($this->model->type == 'Cluster') {
			return 'clusters';
		} else {
			return 'phonemes';
		}
	}
}