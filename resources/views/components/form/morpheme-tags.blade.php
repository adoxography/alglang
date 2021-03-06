@extends('components.form.field')

@php
    $name = isset($name) ? $name : 'morphemes';
@endphp

@section("{$name}_control")
    <alg-morpheme-tag-input
        source="/autocomplete/morphemes"
        name="{{ $name }}"
        id="{{ $id ?? $name }}"
        :classes="{'is-danger': errors.has('{{ $name }}')}"
        :language="{{ $language }}"
        :allow-duplicates="true"
        :allow-new="true"
        :allow-periods="false"
        :allow-hyphens="false"

        @isset ($placeholder)
            placeholder="{{ $placeholder }}"
        @endisset

        @isset ($rules)
            v-validate="'{{ $rules }}'"
        @endisset

        data-vv-value-path="tags"

        :tags="morphemes"
        ref="morphemes"

        @isset ($on)
            @foreach ($on as $event => $listener)
                {{ '@' . $event }}="{{ $listener }}"
            @endforeach
        @else
            @input="errors.clear('{{ $name }}')"
        @endisset
    ></alg-morpheme-tag-input>
@endsection
