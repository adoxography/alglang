@extends('phon::phonemes.show')

@section('content')
	@foreach ($languages as $language)
		<span style="color: #{{ $language->color }}; @if(!$loop->first) margin-left: .5rem; @endif">&#9679</span> {!! $language->present('link') !!}
	@endforeach
	<alg-reflex-network :graph-data="{{ $graphData }}"></alg-reflex-network>
@endsection
