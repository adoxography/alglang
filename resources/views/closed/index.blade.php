@extends('layout')

@section('content')
	<div class = 'itemList'>
		<h2>{{ $itemName }}</h2>
		<ul>
			@foreach($items as $item)
				<li><a href='/{{ $itemLink }}/{{ $item->id }}'>{{ $item->name }}</a></li>
			@endforeach
		</ul>
		<h3><a href='/{{ $itemLink }}/create' class = 'newItem'>Add new</a></h3>
	</div>
@stop