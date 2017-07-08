<?php

namespace Algling\SS\Controllers;

use App\Language;
use Algling\SS\Models\Variable;
use Algling\SS\Models\Datapoint;
use App\Http\Controllers\Controller;
use Algling\SS\Requests\DatapointRequest;

class DatapointController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth')->except('index', 'show');
		$this->middleware('checkbox:isExtended')->only(['store', 'update']);
	}

	public function show(Datapoint $datapoint)
	{
		$datapoint->load(['language', 'variable', 'value', 'sources']);

		return view('ss::datapoints.show', compact('datapoint'));
	}

	public function create()
	{
		return view('ss::datapoints.create');
	}

	public function store(DatapointRequest $request)
	{
		$datapoint = Datapoint::create($request->all());

		flash("{$datapoint->language->name}/{$datapoint->variable->name} updated successfully", 'is-success');
		return redirect("/datapoints/{$datapoint->id}");
	}

	public function edit(Datapoint $datapoint)
	{
		$datapoint->load(['language', 'variable', 'value', 'sources']);

		return view('ss::datapoints.edit', compact('datapoint'));
	}

	public function update(DatapointRequest $request, Datapoint $datapoint)
	{
		$datapoint->update($request->all());

		flash("{$datapoint->language->name}/{$datapoint->variable->name} updated successfully", 'is-success');
		return redirect("/datapoints/{$datapoint->id}");
	}

	public function destroy(Datapoint $datapoint)
	{
		$datapoint->delete();

		return redirect("/variables/{$datapoint->variable_id}");
	}

	public function addDatapointToLanguage(Language $language)
	{
		return view('ss::datapoints.create', compact('language'));
	}

    public function addDatapoint(Variable $variable, Language $language)
    {
        return view('ss::datapoints.create', compact('variable', 'language'));
    }
}