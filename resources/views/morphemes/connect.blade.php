@extends('layout')

@section('title')
    Connect
@endsection

@section('content')
    @component('components.form', ['method' => 'PATCH', 'action' => "/morphemes/{$morpheme->id}/connect", 'visible' => true])
        <ul class="field">
            @foreach ($matches as $match)
                <li>
                    <label class="checkbox">
                        <input type="checkbox" name="matches[{{ $match->id }}]" value="{{ get_class($match) }}" />
                        {!! $match->present('link') !!}
                        {!! preg_replace('/' . str_replace(['*', '-'], '', $morpheme->name) . '/', '<strong>$0</strong>', $match->present()->as('morphemes', false)->__toString()) !!}
                    </label>
                </li>
            @endforeach
        </ul>
    @endcomponent
@endsection
