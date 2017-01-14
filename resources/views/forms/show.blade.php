@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Form Details</h1>
	</div>
	<br />

	<div id="root">
		<model-card>
			<template slot="header">
				<em>{{ $form->surfaceForm }}</em>
			</template>

			<field-card width="is-half">
				<template slot="label">
					<p class="card-header-title">Pronunciation</p>
				</template>
				@if($form->phoneticForm)
					{{ $form->phoneticForm }}
				@else
					Unknown/Unclear
				@endif
			</field-card>
			<field-card width="is-half">
				<template slot="label">
					<p class="card-header-title">Morphemes</p>
				</template>
				@if(count($form->morphemes) > 0)
					@foreach($form->morphemes as $morpheme)
						@if($morpheme->name !== 'V')
							<a href='/morphemes/{{ $morpheme->id }}'>{{ $morpheme->name }}</a>
						@else
							{{ $morpheme->name }}
						@endif
					@endforeach
				@else
					Unknown/Unclear
				@endif
			</field-card>

			<field-card width="is-one-quarter">
				<template slot="label">
					<p class="card-header-title">Argument Structure</p>
				</template>
				{{ $form->formType->subject->name }}
				@if($form->formType->primaryObject)
					- {{ $form->formType->primaryObject->name }}
				@endif
				@if($form->formType->secondaryObject)
					+ {{ $form->formType->secondaryObject->name }}
				@endif
			</field-card>
			<field-card width="is-one-quarter">
				<template slot="label">
					<p class="card-header-title">Class</p>
				</template>
				<a href="/classes/{{ $form->formType->class_id }}">{{ $form->formType->formClass->name }}</a>
			</field-card>
			<field-card width="is-one-quarter">
				<template slot="label">
					<p class="card-header-title">Order</p>
				</template>
				<a href="/orders/{{ $form->formType->order_id }}">{{ $form->formType->order->name }}</a>
			</field-card>
			<field-card width="is-one-quarter">
				<template slot="label">
					<p class="card-header-title">Mode</p>
				</template>
				<a href="/modes/{{ $form->formType->mode_id }}">{{ $form->formType->mode->name }}</a>
			</field-card>

			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Parent</p>
				</template>
				@if($form->parent)
					<a href="/forms/{{ $form->parent_id }}">{{ $form->parent->surfaceForm }} ({{ $form->parent->language->name }})</a>
				@else
					Unknown/Unclear
				@endif
			</field-card>
			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Examples</p>
				</template>
				@if(count($form->examples) > 0)
					<!-- fill in later -->
				@else
					None
				@endif
			</field-card>			
			<field-card width="is-one-third">
				<template slot="label">
					<p class="card-header-title">Duplicates</p>
				</template>
				@if(count($form->duplicates) > 0)
					<!-- fill in later -->
				@else
					None
				@endif
			</field-card>

			<template slot="footer">
				<a class="card-footer-item" href = "/forms/{{ $form->id }}/edit">Edit</a>
				<a class="card-footer-item">Delete</a>
			</template>
		</model-card>
	</div>

	<br />

	<div class="box">
		<h4 class="title is-4">Sources</h4>
		<h6 class="subtitle is-6">Hover to see full citation</h6>
		<div class="content">
		@if(count($form->sources) > 0)
			<ol>
				@foreach($form->sources as $source)
					<li title="{{ $source->long }}">{{ $source->short }}</li>
				@endforeach
			</ol>
		@else
			None
		@endif
		</div>
	</div>

{{-- 	<div class = 'show'>
		<h1>{{ $form->surfaceForm }} (<a href = '/languages/{{ $form->language->id }}'>{{ $form->language->name }}</a>) (<a href = '/forms/{{ $form->id }}/edit'>Edit</a>)</h1>
		<table>
			<tr>
				<td class = 'label'>Phonetic Form</td>
				<td class = 'value'>
					@if($form->phoneticForm)
						{{ $form->phoneticForm }}
					@else
						Unknown
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Morphemes</td>
				<td class = 'value'>
					@if(count($form->morphemes) > 0)
						@foreach($form->morphemes as $morpheme)
							@if($morpheme->name !== 'V')
								<a href = '/morphemes/{{ $morpheme->id }}'>
							@endif
							{{ $morpheme->name }}
							@if($morpheme->name !== 'V')
								</a>
							@endif
						@endforeach
					@else
						Unclear
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Argument Structure</td>
				<td class = 'value'>
					{{ $form->formType->subject->name }}
					@if($form->formType->primaryObject)
						- {{ $form->formType->primaryObject->name }}
					@endif
					@if($form->formType->secondaryObject)
						+ {{ $form->formType->secondaryObject->name }}
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Parent</td>
				<td class = 'value'>
					@if($form->parent)
						<a href = '/forms/{{ $form->parent->id }}'>{{ $form->parent->surfaceForm }}</a> (<a href = '/languages/{{ $form->parent->language->id }}'>{{ $form->parent->language->name }}</a>)
					@else
						Unknown
					@endif
				</td>
			<tr>
				<td class = 'label'>Class</td>
				<td class = 'value'>{{ $form->formType->formClass->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Order</td>
				<td class = 'value'>{{ $form->formType->order->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Mode</td>
				<td class = 'value'>{{ $form->formType->mode->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Duplicates</td>
				<td class = 'itemList'>
					@if(count($form->duplicates) > 0)
						@foreach($form->duplicates as $duplicate)
							<ul>
								<li><a href = '/forms/{{ $duplicate->id }}'>{{ $duplicate->formType->subject->name }}</a></li>
							</ul>
						@endforeach
					@else
						None
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Examples (<a href = '/forms/{{ $form->id }}/addExample'>Add another</a>)</td>
				@if(count($form->examples) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($form->examples as $example)
								<li><a href = '/examples/{{ $example->id }}'>{{ $example->name }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
			<tr>
				<td class = 'label'>Sources</td>
				@if(count($form->sources) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($form->sources as $source)
								<li><span title = '{{ $source->long }}'>{{ $source->short }}</span>, {{ $source->pivot->extraInfo }}</li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
		</table>
		<form method = 'POST' action = '/forms/{{ $form->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div> --}}

@stop