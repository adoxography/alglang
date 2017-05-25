<?php

use App\Source;
use App\Language;
use Algling\Morphemes\Models\Slot;
use Algling\Morphemes\Models\Gloss;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MorphemeTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_morpheme_has_attributes()
	{
		$language = factory(Language::class)->create();
		$slot = factory(Slot::class)->create();

		$morpheme = Morpheme::create([
			'name' => 'tst',
			'language_id' => $language->id,
			'gloss' => 'V',
			'slot_id' => $slot->id,
			'allomorphyNotes' => 'These are the allomorphy notes',
			'historicalNotes' => 'These are the historical notes',
			'privateNotes' => 'These are the private comments'
		]);

		$this->assertNotNull($morpheme->id);
		$this->assertEquals('tst', $morpheme->name);
		$this->assertEquals($language->id, $morpheme->language_id);
		$this->assertEquals('V', $morpheme->gloss);
		$this->assertEquals($slot->id, $morpheme->slot_id);
		$this->assertEquals('These are the allomorphy notes', $morpheme->allomorphyNotes);
		$this->assertEquals('These are the historical notes', $morpheme->historicalNotes);
		$this->assertEquals('These are the private comments', $morpheme->privateNotes);
		$this->assertEquals(1, $morpheme->disambiguator);
	}

	/** @test */
	function a_reconstructed_morpheme_has_an_asterisk()
	{
		// Create a reconstructed language
		$language = factory(Language::class)->create([
			'reconstructed' => 1
		]);

		// Add a form to it
		$morpheme = factory(Morpheme::class)->create([
			'language_id' => $language->id,
			'name' => '-test'
		]);

		$this->assertEquals('*-test', $morpheme->name);
	}

	/** @test */
	function a_morpheme_can_have_sources()
	{
		$source = factory(Source::class)->create();
		$morpheme = factory(Morpheme::class)->create();

		$sourceData = collect([['id' => $source->id, 'extraInfo' => 'page 7']]);
		$morpheme->connectSources($sourceData);

		$this->assertCount(1, $morpheme->sources);
		$this->assertEquals($source->id, $morpheme->sources->first()->id);
		$this->assertEquals('page 7', $morpheme->sources->first()->pivot->extraInfo);
	}

}