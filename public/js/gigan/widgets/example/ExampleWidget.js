/**
 * Created by patdaburu on 9/9/2016.
 */
"use strict";

define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ExampleWidget.html"
],function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template){

    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
        //	set our template
        templateString: template,

        //	some properties
        baseClass: "gigan-exampleWidget",

        postCreate: function(){

        }
    });
});