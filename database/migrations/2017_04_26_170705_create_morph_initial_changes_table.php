<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMorphInitialChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Morph_InitialChanges', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            // Primary key
            $table->increments('id');

            // Strings
            $table->string('change');

            // Foreign keys
            $table->unsignedInteger('morpheme_id');

            // Other
            $table->unsignedInteger('disambiguator');

            // Timestamps
            $table->timestamps();

            // Constraints
            $table->foreign('morpheme_id')->references('id')->on('Morph_Morphemes');
            $table->unique(['morpheme_id', 'disambiguator']);
            $table->unique(['morpheme_id', 'change']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Morph_InitialChanges');
    }
}
