<form
	method="{{ isset($method) && $method == 'GET' ? 'GET' : 'POST' }}"

	@isset($action)
	action="{{ $action }}"
	@endisset

	@isset($class)
	class="{{ $class }}"
	@endisset

	@if (isset($files) && $files)
		enctype="multipart/form-data"
	@endif

	@submit="validateBeforeSubmit($event)"
>

	@if(isset($method) && ($method != 'GET' && $method != 'POST'))
		{{ method_field($method) }}
	@endif
	{{ csrf_field() }}
	{{ $slot }}

	@if(isset($visible) && $visible)
	<div class="field">
		<button type="submit" class="button is-primary" :disabled="errors.any()">Submit</button>
	</div>
	@endif
</form>
