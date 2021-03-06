@extends('layout', ['title' => $morpheme->name])

@section('title')
	<label>Morpheme details:</label>
	{!! $morpheme->present()->as('disambiguatedName', 'bold')->then('language')->as('link', 'morphemes') !!}
@endsection

@section('icons')
	@include('components.show-icons', ['model' => $morpheme])
@endsection

@section('panel')
	@include('morphemes.partials.panel')
@endsection

		@component('components.model', ['uri' => "/morphemes/{$morpheme->id}", 'model' => $morpheme, 'history' => $morpheme->revisionHistory])
			@slot('header')
				{{ $morpheme->name }}<em><sup>{{ $morpheme->disambiguator }}</sup></em> <span style="padding-left: .25em;">(<a href="/languages/{{ $morpheme->language_id }}">{{ $morpheme->language->name }}</a>)</span>
			@endslot

			<model-tab name="Basic Details" selected="true">
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">

						{{-- Gloss field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Gloss'])
							{!! $morpheme->renderGlossWithDescription() !!}
						@endcomponent

						{{-- Slot field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Slot'])
							<a href="/slots/{{ $morpheme->slot_id }}">{{ $morpheme->slot->abv }} ({{ $morpheme->slot->name }})</a>
						@endcomponent

						{{-- Initial Changes field --}}
						@if(count($morpheme->initialChanges) > 0)
							@component('components.model.field', ['width' => 'is-12', 'label' => 'Initial change form(s):'])
								<ul style="margin-top: 0;">
									@foreach($morpheme->initialChanges as $initialChange)
										<li>{{ $initialChange->change }}</li>
									@endforeach
								</ul>
							@endcomponent
						@endif

						{{-- Sources --}}
						@component('components.model.field', ['label' => "Sources (Hover a source for the full citation)"])
							@include('components.model.sourcelist', ['sources' => $morpheme->sources])
						@endcomponent
					</div>
				</div>
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">
						@include('components.model.text', ['width' => 'is-12', 'label' => 'Allomorphy', 'text' => $morpheme->allomorphyNotes, 'language_id' => $morpheme->language_id])

						{{-- Historical Notes --}}
						@component('components.model.field', ['width' => 'is-12', 'label' => 'Historical Notes'])
							<p>
								<em>Parent Morpheme: </em>
								@if($morpheme->parent)
									{!! $morpheme->parent->present()->as('unique', 'link')->then('language')->as('link') !!}
								@else
									Unknown/Unclear
								@endif
							</p>
							@if($morpheme->changeType)
								<em>Change Type: </em>{{ $morpheme->changeType->name }}
							@endif
						@endcomponent
						@include('components.model.text', ['width' => 'is-12', 'text' => $morpheme->historicalNotes, 'language_id' => $morpheme->language_id])

						{{-- Comments --}}
						@can('add content')
							@include('components.model.text', ['width' => 'is-12', 'label' => 'Private Comments', 'text' => $morpheme->comments, 'language_id' => $morpheme->language_id])
						@endcan
					</div>
				</div>
			</model-tab>

			<model-tab name="Forms">
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Forms that contain this morpheme'])
					@if(count($morpheme->forms) > 0)
						<ul>
							@foreach($morpheme->forms as $form)
								<li>{!! $form->present()->as('unique', 'link') !!}</li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endcomponent
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Examples that contain this morpheme'])
					@if(count($morpheme->examples) > 0)
						<ul>
							@foreach($morpheme->examples as $example)
								<li>{!! $example->present()->as('unique', 'link') !!}</li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endcomponent
			</model-tab>

		@endcomponent