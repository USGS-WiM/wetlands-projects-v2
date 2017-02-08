/**
 * Created by bdraper on 8/19/2015.
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////Example 8: sandy sensors from geojson, clustered, symbolized by type (235 sites, symbolized by category in attributes)
//// this example demonstrates display of 235 clustered points, with multiple, attribute-dependent symbols, presented as a single layer, with a single cluster symbol
/////////////////////////////////////////////////////////////////////////////////////////////////////////

$( document ).ready(function() {

    //for jshint
    'use strict';

    /* create map */
    var map = L.map('mapDiv').setView([39.833333, -98.583333], 4);
    var layer = L.esri.basemapLayer('Gray').addTo(map);
    var layerLabels;

    $('#mapDiv').height($('body').height());
    map.invalidateSize();

  L.esri.dynamicMapLayer({
    url: 'https://www.fws.gov/wetlands/arcgis/rest/services/WetlandsProjects/Recent_and_Current_Projects/MapServer',
    opacity: 0.7
  }).addTo(map);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////end sandy sensors from geojson symbolized by type
////////////////////////////////////////////////////////////////////////////////////////////////////////////


  L.esri.basemapLayer('Gray').addTo(map);

