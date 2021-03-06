@extends('layout', ['title' => $title])

@section('styles')
	@foreach($styles as $style)
		<style>{!! $style !!}</style>
	@endforeach
@endsection

@section('title')
	{{ $title }}
@endsection

@section('content')
	<div class="alg-page content">
		{!! $page !!}
	</div>
@endsection
