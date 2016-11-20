<?php

use Illuminate\Database\Seeder;

class seed_classes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Classes')->delete();
        
        $classes = array(
        	['id' => 1, 'name' => 'AI'],
        	['id' => 2, 'name' => 'II'],
        	['id' => 3, 'name' => 'AT'],
        	['id' => 4, 'name' => 'IT'],
        );
        
        DB::table('Classes')->insert($classes);
    }
}

?>