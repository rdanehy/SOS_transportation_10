var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
        ],
        view: new ol.View({
          center:ol.proj.transform([-86.14, 39.79], 'EPSG:4326','EPSG:3857'),
          zoom: 12,
          minZoom: 10,
          maxZoom: 18

        })
      });


var layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([-86.1581, 39.7894])), color: 'green'
             })
         ]
        })
 });
var layer2= new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([-86.1381, 39.7594]))
             })
         ]
        })
 });

var layer3= new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([-86.1581, 39.7694]))
             })
         ]
        })
 });

var layer4= new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([-86.1381, 39.8194])), color: 'green'
})
         ]
        })
 });

map.addLayer(layer);
map.addLayer(layer2);
map.addLayer(layer3);
map.addLayer(layer4);

 var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');

 var overlay = new ol.Overlay({
     element: container,
     autoPan: true,
     autoPanAnimation: {
         duration: 250
     }
 });
 map.addOverlay(overlay);

 closer.onclick = function() {
     overlay.setPosition(undefined);
     closer.blur();
     return false;
 };

  map.on('singleclick', function (event) {
     if (map.hasFeatureAtPixel(event.pixel) === true) {
         var coordinate = event.coordinate;
         content.innerHTML ='Bus ID: 121<br/>Occupancy: 5<br/>Route: New York Avenue - Jordan St <img src="./static/images/bus_schematic.png " height=" 300" width=" 900">'
         overlay.setPosition(coordinate);
     } else {
         overlay.setPosition(undefined);
         closer.blur();
     }
 });

  // change mouse cursor when over marker
map.on('pointermove', function(e) {
  if (e.dragging) {
    $(element).popover('destroy');
    return;
  }
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});