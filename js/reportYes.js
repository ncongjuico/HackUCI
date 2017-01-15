// var map;
//
// //Initiate the Map
// function initMap() {
//   var pyrmont = {lat: 34.0522, lng: -118.2437};
//
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: pyrmont,
//     zoom: 13
//   });
//
//   var service = new google.maps.places.PlacesService(map);
//
//   service.nearbySearch({
//     location: pyrmont,
//     radius: 5000,
//     type: ['bar']
//   }, processResults, callback);
// }

// smear out function
var fadeOut = function fadeOut(section) {
    section.classList.remove('fadeIn');
    section.classList.add('fadeOut');
};

// smear in function
var fadeIn = function fadeIn(section) {
    section.classList.remove('fadeOut');
    section.classList.add('fadeIn');
};
