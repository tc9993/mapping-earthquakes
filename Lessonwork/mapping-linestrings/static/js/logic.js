// // Add consol.log to check if code works
// console.log('working');

// Create tile layer that is the background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
});

//pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

//Accessing the airpor geojson url
let airportData = 'https://raw.githubusercontent.com/tc9993/mapping-earthquakes/fb81d06c4d9d395d92009c1e4df3d99ecb6a9fef/Lessonwork/mapping-geojson-points/static/js/majorAirports.json';

//grabbing our GeoJSON data
d3.json(airportData).then(function(data){
    console.log(data);
    //create geojson layer w/ data
    L.geoJson(data).addTo(map);
})

//-----------------------------------------------------------------------13.5.4 ^
// //add our 'graymap' tile layer to the map
// streets.addTo(map);

// //Accessing the airpor geojson url
// let airportData = 'https://raw.githubusercontent.com/tc9993/mapping-earthquakes/fb81d06c4d9d395d92009c1e4df3d99ecb6a9fef/Lessonwork/mapping-geojson-points/static/js/majorAirports.json';

// //grabbing geojson data
// d3.json(airportData).then(function(data){
//     console.log(data);
//     //creating a geojson layer with the retrieved data
//     L.geoJson(data).addTo(map);
// });

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// let marker = L.circleMarker([34.0522, -118.2437]).addTo(map);

//get data from cities.js
// let cityData = cities;

// cityData.forEach(function(city){
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius: city.population / 100000
//     })
//     .bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// let line = [
//     [33.9416, -118.4085],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     dashArray: "30 10",
//     color: "blue"
//   }).addTo(map);

// //Add GeoJSON data
// let sanFranAirport =
// {
//     'type':'FeatureCollection', 'features':[{
//         'type':'Feature',
//         'properties':{
//             'id':'3469',
//             "name":"San Francisco International Airport",
//             "city":"San Francisco",
//             "country":"United States",
//             "faa":"SFO",
//             "icao":"KSFO",
//             "alt":"13",
//             "tz-offset":"-8",
//             "dst":"A",
//             "tz":"America/Los_Angeles"},
//             "geometry":{
//                 "type":"Point",
//                 "coordinates":[-122.375,37.61899948120117]}
    
//     }]
// }

// // Grabbing our GeoJSON data. 13.5.1
// L.geoJSON(sanFranAirport).addTo(map);
// L.geoJSON(sanFranAirport, {
//     //turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup('<h2>' + feature.properties.city + '</h2>' + '<h>' + feature.properties.city + ', ' + feature.properties.country)
//     }
// }).addTo(map);

// //grabbing geosjon data THIS ONE IS 13.5.2  - THESE DONT SEEM TO WORK??
// L.geoJson(airportData, {
//     onEachFeature: function(feature, layer) {
//         return L.marker(layer)
//         .bindPopup();
//      }
// });

// L.geoJSON(airportData, {
//     onEachFeature: function(feature,layer){
//         console.log(layer);
//         layer.bindPopup();
//     }
// }).addTo(map);