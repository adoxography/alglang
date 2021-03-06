@php

function recursiveRender($group, $variable, $colorAssignments) {
	$html = '';

	$group->load(['languages.datapoints', 'languages.datapoints.variable', 'languages.datapoints.value']);
	$data = $group->directDescendants()->sortBy('position');

	foreach($data as $child) {

		if($child instanceof App\Models\Group) {
			if($child->languages->count() > 0 && ($child->hasVariable($variable) || Auth::user() && Auth::user()->hasPermissionTo('add content'))) {
				$html .= '<li>';
				$html .= "<input type='checkbox' ";

				if($child->hasVariable($variable)) {
					$html .= "checked='checked' ";
				}

				$html .= "id='c{$child->id}' />";
				$html .= "<label for='c{$child->id}' class='label'><a href='/groups/{$child->id}'>{$child->name} languages</a></label>";
				$html .= recursiveRender($child, $variable, $colorAssignments);
				$html .= '</li>';
			}
		} else if($child->hasVariable($variable)) {
			$datapoint = $child->getVariable($variable);
			$color = $colorAssignments[$datapoint->value->name];

			$html .= '<li><span class="label">';

			$html .= '<span class="icon is-small" style="margin-right: .2em;"><i class="fa fa-circle" style="color: #' . $color . '"></i></span>';
			$html .= $child->present()->as('link', 'survey') . ':&nbsp';
			$html .= '<a style="color: #' . $color . '" href="/datapoints/' . $datapoint->id . '">' . $datapoint->value->name . '</a>';

			if($datapoint->note) {
				$html .= '&nbsp(' . strip_tags($datapoint->note) . ')';
			}

			$html .= '</span></li>';
		} else if(Auth::user() && Auth::user()->hasPermissionTo('add content')) {
			$html .= '<li><span class="label">';
			$html .= $child->present()->as('link', 'survey');
			$html .= '&nbsp(<a href="/variables/' . $variable->id . '/languages/' . $child->id . '/addDatapoint">Add</a>)';
			$html .= '</span></li>';
		}
	}

	return "<ul>$html</ul>";
}

@endphp

@extends('variables.show')

@section('content')
	<div class="field">
		<span class="label">{{ $variable->description }}</span>

		<ul class="tree">
			<li>
				<input type="checkbox" checked="checked" id="c0" />
				<label class="label" for="c0"><a href="/groups/1">Algonquian languages</a></label>
				{!! recursiveRender($group, $variable, $colorAssignments) !!}
			</li>
		</ul>
	</div>
@endsection
