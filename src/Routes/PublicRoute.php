<?php
namespace Tualo\Office\Codemirror\Routes;
use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;


class PublicRoute implements IRoute{
    public static function register(){
        BasicRoute::add('/codemirror/(?P<file>[\/.\w\d\-\_]+)'.'.js',function($matches){
            if (file_exists( dirname(__DIR__,2).'/lib/'.$matches['file'].'.js') ){
                App::etagFile( dirname(__DIR__,2).'/lib/'.$matches['file'].'.js' , true);
            }
        },['get'],false);
    }
}