/**
 * Created by patdaburu on 7/23/2016.
 */
"use strict";

var app;

require(["esri/Map",
    "esri/Basemap",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/widgets/Search",
    "esri/core/watchUtils",
    "dojo/query",

    // Bootstrap
    "bootstrap/Collapse",
    "bootstrap/Dropdown",
    "bootstrap/Tab",

    // Calcite-maps
    "calcite-maps/calcitemaps-v0.2",
    "dojo/domReady!"
], function (Map, Basemap, MapView, SceneView, Search, watchUtils, query) {

    // App
    app = {
        scale: 50000000,
        center: [-40, 40],
        initialExtent: null,
        basemap: "streets",
        viewPadding: {
            top: 50
        },
        mapView: null,
        sceneView: null,
        activeView: null,
        searchWidget: null
    };

    // Map
    var map = new Map({
        basemap: app.basemap
    });
    app.mapView = new MapView({
        container: "mapViewDiv",
        map: map,
        scale: app.scale,
        center: app.center,
        padding: app.viewPadding,
        ui: {
            components: ["zoom", "compass" ]
        }
    });

    // Scene
    var mapScene = new Map({
        basemap: app.basemap
    });
    app.sceneView = new SceneView({
        container: "sceneViewDiv",
        map: mapScene,
        scale: app.scale,
        center: app.center,
        padding: app.viewPadding,
    });

    app.activeView = app.mapView;

    app.activeView.then(function () {
        app.initialExtent = app.activeView.extent;
    })

    // Search widget
    app.searchWidget = new Search({
        view: app.activeView
    }, "searchWidgetDiv");
    app.searchWidget.startup();


    // Tabs
    function syncTabs(e) {
        query(".calcite-navbar li.active").removeClass("active");
        query(e.target).addClass("active");
    }

    // Views
    function syncViews(fromView, toView) {
        watchUtils.whenTrueOnce(toView, "ready").then(function (result) {
            watchUtils.whenTrueOnce(toView, "stationary").then(function (result) {
                toView.goTo(fromView.viewpoint);
                toView.popup.reposition();
            });
        });
    }

    // Search
    function syncSearch() {
        app.searchWidget.view = app.activeView;
        // Perform search
        if (app.searchWidget.selectedResult) {
            app.searchWidget.search(app.searchWidget.selectedResult.name);
            app.activeView.popup.reposition();
        } else {
            app.searchWidget.clear();
        }
    }

    // Tab Events (Views)
    query(".calcite-navbar li a[data-toggle='tab']").on("click", function (e) {
        syncTabs(e);
        if (e.target.text.indexOf("Map") > -1) {
            syncViews(app.sceneView, app.mapView);
            app.activeView = app.mapView;
        } else {
            syncViews(app.mapView, app.sceneView);
            app.activeView = app.sceneView;
        }
        syncSearch();
    });

});
