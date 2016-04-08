<?php

use Illuminate\Database\Seeder;
use App\Client;

class ClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $c = new Client;
        $c->name = 'Harper-Beck';
        $c->description = 'Harper-Beck is a digital agency with clients all over the world. Focusing on Law Offices and other industries, they are pretty cool.';
        $c->save();

        $c = new Client;
        $c->name = 'Fuze7';
        $c->description = 'Fuze7 is a local agency in Lake Oswego, OR. We work with them to provide support to various local businesses. Working together we provide support to many various clients, including apparel, nano technology, construction companies, and more.';
        $c->save();
    }
}
