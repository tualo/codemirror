<?php

namespace Tualo\Office\Codemirror\Middlewares;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware{
    public static function register(){
        TualoApplication::use('codemirror',function(){
            try{
                /*
                ["CodeMirror/lib/codemirror.js",0],

                ["CodeMirror/mode/jade/jade.js",0],
                ["CodeMirror/mode/sql/sql.js",0],
                ["CodeMirror/mode/javascript/javascript.js",0],
              
                TualoApplication::stylesheet("./dashboard/shake.css" ,100000);
                TualoApplication::javascript('dashboard_app', './dashboard/Application.js',[],100000);
                */
                // TualoApplication::javascript('codemirror_bundle', './codemirror/editor.bundle.js',[],100000);
            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}