@php
	$firstSegments = $clusters->pluck('phonemeable')->pluck('firstSegment')->unique('id');
	$secondSegments = $clusters->pluck('phonemeable')->pluck('secondSegment')->unique('id');
@endphp

@extends('languages/show')

@section('content')

	<div class="field">
		<span class="label">Clusters</span>

		<table class="table is-narrow is-bordered" style="display: block;">
			@if($clusters->count() > 0)
				<thead>
					<tr>
						<th></th>
						@foreach($secondSegments as $segment)
							<th>{{ $segment->present() }}</th>
						@endforeach
					</tr>
				</thead>
				<tbody>
					@foreach ($firstSegments as $firstSegment)
						<tr>
							<th>{{ $firstSegment->present() }}</th>

							@foreach ($secondSegments as $secondSegment)
								@php
									$phonemes = $clusters->filter(function($value) use ($firstSegment, $secondSegment) {
										return $value->phonemeable->firstSegment_id == $firstSegment->id && $value->phonemeable->secondSegment_id == $secondSegment->id;
									})->sortBy(function($cluster) {
										return strlen($cluster->name);
									});
								@endphp

								<td>
									@foreach ($phonemes as $phoneme)
										{!! $phoneme->present('link') !!}
									@endforeach
								</td>
							@endforeach
						</tr>
					@endforeach
				</tbody>
			@else
				<tbody><tr><td>No data</td></tr></tbody>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit)
				<tfoot>
					<tr>
						<td colspan="100%" style="border: none;">
							<a href="/languages/{{ $language->id }}/addPhoneme?type=cluster">Add another</a>
						</td>
					</tr>
				</tfoot>
			@endif
		</table>
	</div>	
@endsection