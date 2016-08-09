var map;

require([
    "esri/map"


        
        , "esri/dijit/BasemapToggle"

        
        , "esri/basemaps"
        
        , "esri/dijit/HomeButton"
        
        , "dojo/domReady"]
    , function (Map, BasemapToggle, esriBasemaps, HomeButton) {

        //define china vector layer
        esriBasemaps.china = {
            baseMapLayers: [{
                url: "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"
                }]
            , thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png"
            , title: "china"
        };

        map = new Map("map", {
            basemap: "china"
            , center: [110, 32]
            , zoom: 4
            , logo: false
            , minZoom: 4
            , slider: true
        });

        var basemapToggle = new BasemapToggle({
            theme: "basemapToggle"
            , map: map
            , visible: true
            , basemap: "hybrid"
        }, "basemap-toggle");
        basemapToggle.startup();

        var homeButton = new HomeButton({
            theme: "HomeButton"
            , map: map
            , visible: true
        }, "btn-home");
        homeButton.startup();

    });