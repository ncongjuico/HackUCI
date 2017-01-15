
      var map;

      //Initiate the Map
      function initMap() {
        var pyrmont = {lat: 34.0522, lng: -118.2437};

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 13
        });

        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch({
          location: pyrmont,
          radius: 5000,
          type: ['bar']
        }, processResults, callback);
      }
