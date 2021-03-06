	@php
if(!isset($uri)) {
	$uri = '/'.strtolower(array_last(explode('_', $model->table))).'/';
}
@endphp

@can('add content')
	@section('icons')
		<alg-bookmark uri="{{ $uri }}{{ $model->id }}" bookmarked="{{ $model->isBookmarkedBy() }}"></alg-bookmark>
	    <a href="{{ $uri }}{{ $model->id }}/clone" class="card-header-icon" title="Clone">
	      	<span class="icon">
	        	<i class="fa fa-clone"></i>
	      	</span>
	    </a>
	    <a href="{{ $uri }}{{ $model->id }}/edit" class="card-header-icon" title="Edit">
	      	<span class="icon">
	        	<i class="fa fa-pencil"></i>
	      	</span>
	    </a>
	    @can('delete content')
	    	<alg-button action="{{ $uri }}{{ $model->id }}" method="DELETE" class="card-header-icon" title="Delete">
	    		<span class="icon">
	    			<i class="fa fa-trash"></i>
	    		</span>
	    	</alg-button>
	    @endcan
    @endsection
@endcan
