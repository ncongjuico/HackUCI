
      var map;

      function init(){
        //centered on UCI's LatLng
        var center = new google.maps.LatLng(33.6404952,-117.8442962);
        map = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 13
        });

        var request = {
          location: center,
          radius: 8000,
          types: ['bar']
        };
        infowindow = new google.maps.InfoWindow();

        //search for bars
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      }

      //making sure we have results and no error connecting to google's servers
      function callback(results, status){
        if(status == google.maps.places.PlacesServiceStatus.OK){
          //adds markers on map
          for(var i = 0; i < results.length; i++){
            createMarker(results[i]);
          }
        }
      }

      //places markers on map based on results array
      function createMarker(place){
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        //listener to display infowindow when you click on marker
        google.maps.event.addListener(marker, 'click', function(){
          infowindow.setContent(place.name);
          infowindow.open(map,this);
        });
      }

      google.maps.event.addDomListener(window, 'load', init);