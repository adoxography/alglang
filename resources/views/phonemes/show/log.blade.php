@extends('phonemes.show')

@section('content')
	@include('partials.show.log', ['model' => $phoneme])
@endsection
