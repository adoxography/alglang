<?php

namespace App\Http\Controllers\Phonology;

use App\Models\Phonology\Phoneme;
use App\Http\Requests\Words\ExampleRequest;
use App\Models\Words\Example;
use App\Traits\ConvertsMorphemes;
use App\Http\Controllers\Controller;

class PhonemeExampleController extends Controller
{
    use ConvertsMorphemes;

    public function create(Phoneme $phoneme)
    {
        return view('phonemes.create-example', compact('phoneme'));
    }

    public function store(ExampleRequest $request, Phoneme $phoneme)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();
        $example = Example::create($data);

        $phoneme->examples()->attach($example);

        flash("{$example->name} successfully added to {$phoneme->name}", 'is-success');
        return redirect("phonemes/{$phoneme->id}/examples");
    }
}
