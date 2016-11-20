<?php

use Illuminate\Database\Seeder;

class seed_groups extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('Languages')->delete();
        DB::table('Groups')->delete();
        
        $groups = array(
        	['id' => 1, 'name' => 'Unknown'],
        	['id' => 2, 'name' => 'Plains'],
        	['id' => 3, 'name' => 'Central'],
        	['id' => 4, 'name' => 'Eastern'],
        	['id' => 5, 'name' => 'N/A']
        );
        
        DB::table('Groups')->insert($groups);
    }
}

?>