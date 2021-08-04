## Project Description 

The goal of the project is to display multiple and interactive maps with the location and magnitude of earthquakes during the last 7 days around the world. The Javascript-Leaflet library, HTML, CSS, Bootstrap, and Javascript were used in the project. The Mapbox-API was also used to load the base maps. The project was divided into two steps with different levels of complexity.

## Project Description

The goal of the project is to display multiple and interactive maps with the location and magnitude of earthquakes during the last 7 days around the world. The `Javascript-Leaflet` library, `HTML`, `CSS`, `Bootstrap`, and `Javascript` were used in the project. The Mapbox-API was also used to load the base maps. The project was divided into two steps with different levels of complexity.

- **Step 1:**
A single base layer and one set of data were used:
  - **Base layer:** [mapbox.streets-basic](https://docs.mapbox.com/api/maps/#raster-tiles)
  - **Data layer Source and Data:**
    - **Source:** [United States Geological Survey (USGS)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
    - **Data:** [Earthquakes - Last 7 days - All Earthquakes)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

- **Step 2:**
Multiple optional and interactive base layers were included. An additional dataset and plot were included and they can be activated and deactivated by the user.
  - **Base layer:**
    - [mapbox.light](https://docs.mapbox.com/api/maps) 
    - [mapbox.streets](https://docs.mapbox.com/api/maps)
    - [mapbox.dark](https://docs.mapbox.com/api/maps)
    - [mapbox.satellite](https://docs.mapbox.com/api/maps)
    - [mapbox.outdoors](https://docs.mapbox.com/api/maps)
  - **Data layer Source and Data:**
    - **Layer 1** Earthquake information
      - **Source:** [United States Geological Survey (USGS)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
      - **Data:** [Earthquakes - Last 7 days - All Earthquakes)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
    - **Layer 2:** Tectonic Plates
      - **Source:** [Hugo Ahlenius, GIS-and-Cartography Consultant](https://github.com/fraxen/tectonicplates)
      - **Data:** [Tectonic Plates Boundaries](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

## Libraries Required (already included in the index.html file)

- D3 JavaScript
- Leaflet
