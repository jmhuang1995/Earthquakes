// Store our API
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
console.log(queryUrl)

// Function to size up the radius of circle markers
function circleSize (magnitude) {
  return magnitude * 5;
}

// Function to shade in earthquake using depth
function colorCode(depth) {
if (depth >= -10 && depth < 10 ) {
  return "#ADFF2F"
}
else if (depth >= 10 && depth < 30) {
  return "#FFFF00"
}
else if (depth >= 30 && depth < 50) {
  return "#FFA500"
}
else if (depth >= 50 && depth < 70) {
  return "#FF4500"
}
else if (depth >= 70 && depth < 90) {
  return "#FF0000"
} else if (depth >= 90) {}
  return "#8B0000"
}



// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {

  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place + "<br>" + "Magnitude: " + feature.properties.mag + "<br>" + "Depth: " + feature.geometry.coordinates[2] +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }



  // Create a GeoJSON layer containing the circle marker
  var earthquakes = L.geoJSON(earthquakeData, {
      pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng);
      },
      style: function(feature){
        console.log(feature.geometry.coordinates[2])
        return{
          radius: circleSize(feature.properties.mag),
          fillColor: colorCode(feature.geometry.coordinates[2]),
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        }
      },
    onEachFeature: onEachFeature
  });


  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });


  // Define a baseMaps
  var baseMaps = {
    "Street Map": streetmap,
    "Greay Scale": lightMap
  };

  // Create overlay
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
