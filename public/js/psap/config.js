/**
 * Created by patdaburu on 7/23/2016.
 */
"use strict";

var dojoConfig = {
    packages: [
        {
            name: "bootstrap",
            location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
            //location: "http://localhost/GitHub/calcite-maps/dist/vendor/dojo-bootstrap"
        },
        {
            name: "calcite-maps",
            location: "https://esri.github.io/calcite-maps/dist/js/dojo"
            //location: "http://localhost/GitHub/calcite-maps/dist/js/dojo"
        },
        {
            name: "gigan",
            location: (window.location.href.substr(0, window.location.href.lastIndexOf('/')) + "/js/gigan")
        }
    ]
};