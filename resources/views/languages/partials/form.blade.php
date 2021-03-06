<alg-language-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(isset($language) && $language->location)
	:old-location="{{ json_encode($language->location) }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])

		<div class="columns is-multiline">

			<!-- Language Name -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'name',
					'autofocus' => true, 
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Alternate Names -->
			<div class="column is-half">
				@component('components.form.text', ['name' => 'alternateNames', 'label' => 'alternate names'])
					@slot('value')
						@if(isset($language))
							{{ $language->alternateNames }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Group -->
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'group',
					'list'  => $groups,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($language))
							{{ $language->group->name }}
						@elseif(isset($parent))
							{{ $parent->group->name }}
						@else
							Central
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Parent -->
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'parent',
					'list'  => $parents,
					'rules' => 'exists'
				])
					@slot('value')
						@if(isset($language))
							@if($language->parent)
								{{ $language->parent->name }}
							@endif
						@elseif(isset($parent))
							{{ $parent->name }}
						@else
							Proto-Algonquian
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- ISO -->
			<div class="column is-3">
				@component('components.form.text', [
					'name'  => 'iso',
					'label' => 'ISO',
					'rules' => 'min:3|max:3',
					'delay' => 500
				])
					@slot('value')
						@if(isset($language))
							{{ $language->iso }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Algonquianist Code -->
			<div class="column is-3">
				@component('components.form.text', [
					'name'  => 'algoCode',
					'label' => 'algonquianist code',
					'rules' => 'required'
				])
					@slot('value')
						@if(isset($language))
							{{ $language->algoCode }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Reconstructed/Attested -->
			<div class="column is-half">
				@component('components.form.radiogroup', [
					'name' => 'reconstructed',
					'options' => [
						'Attested' => '0',
						'Reconstructed' => '1'
					],
					'checked' => isset($language) ? $language->reconstructed : '0'
				])
				@endcomponent
			</div>

			<!-- Notes -->
			<div class="column is-12">
				@component('components.form.textarea', ['name' => 'notes'])
					@slot('value')
						@if(isset($language))
							{{ $language->notes }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- Location --}}
			<div class="column is-12">
				<label class="label">Location</label>
				<alg-map
					:add-mode="true"
					:markers="{{ $parents }}"

					@if(isset($language))
					:marker="{{ $language }}"
					@endif

					v-on:marker-added="updateLocation($event)"
				></alg-map>
			</div>

			<input type="hidden" name="location[position]" v-model="location.position" />
			<input type="hidden" name="location[type]" v-model="location.type" />
		</div>
	@endcomponent
</alg-language-form>
