@extends('components.form.field')

@section("{$name}_control")
	<input

		@if(isset($type))
		type="{{ $type }}"
		@else
		type="text"
		@endif

		class="input"
		value="{{ old($name, 'not found') !== 'not found' ? old($name) : ((request()->$name && (!isset($loadRequest) || $loadRequest)) ? request()->$name : $value) }}"
		autocomplete="off"
		name="{{ $name }}"
		id="{{ $id ?? $name }}"
		:class="{'is-danger': errors.has('{{ $name }}')}"
		ref="{{ $name }}"

		@if (isset($autofocus) && !old($name) && strlen($value) == 0)
		autofocus="autofocus"
		@endif

		@isset ($placeholder)
		placeholder="{{ $placeholder }}"
		@endisset

		@isset ($activeRules)
			v-validate="{{ $activeRules }}"
		@elseif(isset($rules))
			v-validate="'{{ $rules }}'"
		@endisset

		@if(isset($delay))
		data-vv-delay="{{ $delay }}"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif

		@if(isset($model))
		v-model="{{ $model }}"
		@endif

		@if(isset($required) && $required)
		required
		@endif

		@if(isset($events))
			@foreach($events as $event => $listener)
				{!! "@$event='$listener' "!!}
			@endforeach
		@endif
	/>
@endsection
