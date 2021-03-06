@if($phoneme->features->height)
<span class="is-one-line">
	<span class="label">Height:</span>
	{{ $phoneme->features->height->name }}
</span>
@endif

@if($phoneme->features->backness)
<span class="is-one-line">
	<span class="label">Backness:</span>
	{{ $phoneme->features->backness->name }}
</span>
@endif

@if($phoneme->features->length)
<span class="is-one-line">
	<span class="label">Length:</span>
	{{ $phoneme->features->length->name }}
</span>
@endif

@if($phoneme->features->hasBooleans())
<span class="is-one-line">
	<span class="label">Other features:</span>
	{{ $phoneme->features->convertBooleansToString() }}
</span>
@endif