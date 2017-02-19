<?php

namespace App\Http\Controllers;

use App\Form;
use App\FormType;
use App\Http\Requests\LangFormRequest;
use App\Language;
use App\Morpheme;

class FormController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
        $this->middleware('addSources:App\Form')->only('store', 'update');
    }
    
    public function index()
    {
        $forms = Form::all();

        return view('forms.index', compact('forms'));
    }

    public function addExampleTo(Form $form)
    {
        return view('examples.create', compact('form'));
    }

    public function create()
    {
        return view('forms.create');
    }

    public function edit(Form $form)
    {
        $form->load(
            'language',
            'parent',
            'parent.language',
            'formType',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'sources'
        );
        return view('forms.edit', compact('form'));
    }
    
    public function update(LangFormRequest $request, Form $form)
    {
        $data = $request->all();

        // if(!isset($data['phoneticForm'])) {
        //     $data['phoneticForm'] = null;
        // }

        $form->update($data);

        flash($form->surfaceForm.' updated successfully', 'is-success');

        return $form->id;
    }
    
    public function destroy(Form $form)
    {
        $form->delete();
        flash($form->surfaceForm.' deleted successfully.', 'is-info');
        return redirect('/languages/' . $form->language_id);
    }

    public function store(LangFormRequest $request)
    {
        // Insert the form
        $form = Form::create($request->all());

        // Flash a message to the session
        flash($form->surfaceForm.' created successfully.', 'is-success');

        return $form->id;
    }

    public function show(Form $form)
    {
        $form->load([
            'language',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'duplicates',
            'parent.language',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'formType.order',
            'formType.mode',
            'formType.formClass',
            'sources',
            'changeType'
        ]);

        $cognates = $form->cognates();

        return view('forms.show', compact('form', 'cognates'));
    }

    public function addExample(Form $form)
    {
        $presetForm = $form->load('language');

        return view('examples.create', compact('presetForm'));
    }

    public function incompleteForms()
    {
        $languages = [];

        $forms = Form::where('complete', 0)
                     ->orderBy('language_id')
                     ->with('language')
                     ->with('formType.subject')
                     ->with('formType.primaryObject')
                     ->with('formType.secondaryObject')
                     ->get();

        $languageSet = $forms->pluck('language')->unique();

        foreach($languageSet as $language) {
            $languages[$language->name] = $forms->where('language_id', $language->id);
        }

        return view('forms.need-attention', compact('languages'));
    }

    public function disambiguate(Form $form)
    {
        $form->disambiguate(request()->index, request()->disambiguator);
        
        return redirect("/forms/{$form->id}");
    }
}
