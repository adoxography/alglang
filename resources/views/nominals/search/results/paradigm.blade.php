@extends('layout', ['title' => 'Nominal paradigm search results'])

@section('title')
	Nominal paradigm search results
@endsection

@section('content')	
	@if($resultsFound)
	<alg-paradigm-table morphemes-on="{{ $showMorphology }}" inline-template v-cloak>
		<div class="paradigm-results">
			<nav class="level">
				<div class="level-left">
					<div class="level-item">
						<a class="button" @click="toggleShow">Show/Hide Morphology</a>
					</div>
					<div class="level-item">
						<form style="margin: 0;" method="GET" action="/nominals/search/paradigm">
							<input type="hidden" name="preset" value="{{ $params ?: '' }}">
							<button class="button" type="submit">Refine</button>
						</form>
					</div>
				</div>
			</nav>

			@foreach ($paradigms as $name => $paradigm)
				@if (!$paradigm->isEmpty())

					<h5 class="subtitle is-5">{{ $name }}</h5>

					<div class="paradigm-container">
						<table class="table is-bordered" style="display: block;">
							<thead>
								<tr>
									<th>Paradigm</th>
									<th>Arguments</th>
									@foreach ($languages as $language)
										<th>{{ $language->name }}</th>
									@endforeach
								</tr>
							</thead>
							<tbody>
								@foreach ($paradigm->rows as $paradigmName => $features)
									<tr>
										<th rowspan="{{ count($features) }}"> {{ $paradigmName }}</th>
										@foreach ($features as $feature => $forms)
											@if (!$loop->first)
												</tr><tr>
											@endif

											<th>{{ $feature }}</th>

											@foreach ($languages as $language)
												@php
													$currForms = array_filter($forms, function($form) use ($feature, $language) {
														return $form->structure->present('features') == (string)$feature && $form->language_id == $language->id;
													});
												@endphp

												<td>
													@foreach ($currForms as $form)
														{!! $form->present('link') !!}

														@if($form instanceof App\Models\Nominals\Form)
															<div v-show="show">
																{!! $form->printMorphemes() !!}
															</div>
														@endif
													@endforeach
												</td>
											@endforeach
										@endforeach
									</tr>
								@endforeach
							</tbody>
						</table>
					</div>
					<br />
					<p>
						Sources for forms in this paradigm:
						@if($paradigm->hasSources())
							@foreach($paradigm->sources as $source)
								@php
									$output = $source->present('link');

									if(!$loop->last) {
										$output .= ';';
									}
								@endphp

								{!! $output !!}
							@endforeach
						@else
							None
						@endif
					</p>
				@endif
			@endforeach

		</div>
	</alg-paradigm-table>
	@else
		No results
	@endif
@endsection
