<?php

use Illuminate\Http\Request;
use App\Contracts\Search;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is which defines all of the routes that are handled by the
| application.
|
*/

Route::get('',     'HomeController@index');
Route::get('home', 'HomeController@index');
Route::get('welcome', 'HomeController@index');

Route::get('glossary', 'HomeController@glossary');
Route::get('entire-paradigm', 'HomeController@entireParadigm');
Route::get('changelog', 'HomeController@changelog');

Route::get('sandbox', function() {
    return view('sandbox');
});
Route::get('need-attention',        'HomeController@incompleteForms');
Route::get('guide', 'HomeController@guide');

Route::post('backup', 'BackupController@store');

Route::get('profile/bookmarks', 'UserController@bookmarks');

// Contact Routes
Route::get('contact',  'ContactController@index');
Route::post('contact', 'ContactController@send');

// Search Routes
Route::get('search',          'SearchController@index');
Route::get('search/general',  'SearchController@general');
Route::get('search/paradigm', 'SearchController@paradigm');
Route::get('search/form',     'SearchController@form');

// Autocomplete Routes
Route::get('autocomplete',                 'AutocompleteController@test');
Route::get('autocomplete/forms',           'AutocompleteController@forms');
Route::get('autocomplete/formParents',     'AutocompleteController@formParents');
Route::get('autocomplete/morphemes',       'AutocompleteController@morphemes');
Route::get('autocomplete/morphemeParents', 'AutocompleteController@morphemeParents');
Route::get('autocomplete/sources',         'AutocompleteController@sources');

Route::get('log', 'LogController@index');
Route::post('sources/ajax', 'SourceController@store');

// Group Routes
Route::resource('groups',           'GroupController');
Route::patch('groups/{group}/hide', 'GroupController@hide');

// Language Routes
Route::group(['as' => 'languages::'], function() {
	Route::get('languages/order',                  'LanguageController@order');
	Route::post('languages/order',                 'LanguageController@storeOrder');
	Route::resource('languages',                   'LanguageController');
	Route::get('languages/{language}/basic',     'LanguageController@showBasicDetails')->name('showBasic');
	Route::get('languages/{language}/children',  'LanguageController@showChildren')->name('showChildren');
	Route::get('languages/{language}/survey',    'LanguageController@showSurvey')->name('showSurvey');
	Route::get('languages/{language}/forms',     'LanguageController@showForms')->name('showForms');
	Route::get('languages/{language}/morphemes', 'LanguageController@showMorphemes')->name('showMorphemes');
	Route::get('languages/{language}/paradigm',  'LanguageController@showParadigms')->name('showParadigms');
	Route::get('languages/{language}/phonemes',  'LanguageController@showPhonemes')->name('showPhonemes');
	Route::get('languages/{language}/addChild',    'LanguageController@addChild');
	Route::get('languages/{language}/addExample',  'LanguageController@addExample');
	Route::get('languages/{language}/addForm',     'LanguageController@addForm');
	Route::get('languages/{language}/addMorpheme', 'LanguageController@addMorpheme');
	Route::get('languages/{language}/addRule',     'LanguageController@addRule');
	Route::patch('languages/{language}/hide',      'LanguageController@hide');
});

// Rule routes
Route::resource('rules',          'RuleController');
Route::patch('rules/{rule}/hide', 'RuleController@hide');

Route::resource('sources',            'SourceController');
Route::patch('sources/{source}/hide', 'SourceController@hide');

Route::get('profile', 'UserController@show');
Auth::routes();

// Route::group(['as' => 'languages::'], function() {
// 	Route::get('sandbox/languages/{language}', 'LanguageController@showSandbox')->name('showBasic');
// 	Route::get('sandbox/languages/{language}/children', 'LanguageController@showChildren')->name('showChildren');
// });

Route::get('{args}', 'PageController@show')->where('args', '.*');