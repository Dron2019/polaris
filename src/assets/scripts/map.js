// Google map start
function initMap() {
    var gmarkers1 = [];
    filterMarkers = function(category) {
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            var markerMain = gmarkers1.find(item => item.category === 'main');

            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                markerMain.setMap(map);
            } else {
                marker.setMap(null);
                markerMain.setMap(map);
            }
        }
    };

    var center = {
        lat: 50.439572,
        lng: 30.515734
    }; /*{lat:50.406493, lng: 30.519515};*/

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,

    });

    var polygonCoords = [
        new google.maps.LatLng(50.433919, 30.513405),
        new google.maps.LatLng(50.433924, 30.512895),
        new google.maps.LatLng(50.433408, 30.512668),
        new google.maps.LatLng(50.433336, 30.513424),
        new google.maps.LatLng(50.433919, 30.513405)
    ];

    // Настройки для полигона
    var polygon = new google.maps.Polygon({
        path: polygonCoords, // Координаты
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.5
    });

    //Добавляем на карту
    polygon.setMap(map);

    var markersIcons = {
        main: {
            x: 72,
            y: 2
        },
        education: {
            x: 2,
            y: 2
        },
        hospital: {
            x: 37,
            y: 2
        },
        goverment: {
            x: 125,
            y: 2
        },
        shop: {
            x: 160,
            y: 2
        },
        sport: {
            x: 195,
            y: 2
        },
        subway: {
            x: 230,
            y: 2
        }
    };

    var markers_spritesheet;

    if (document.location.pathname === '/') {
        markers_spritesheet = 'img/main_page_map_markers_spritesheet.png';
    } else {
        markers_spritesheet = '../img/main_page_map_markers_spritesheet.png';
    }




    var markersData = [];

    var markersData = [{
        content: '<div class="map-popup">' +
            ' <img src="./assets/images/logo1.svg"> <div class="map-popup__text">Адреса: м. Київ, вул. Вулиця, 45</div>      </div>',
        position: {
            lat: 50.439572,
            lng: 30.515734
        },
        type: 'main'
    }]

    var activeInfoBubble;

    markersData.forEach(function(marker) {
        var markerSettings = {};
        if (marker.type === 'main') {
            markerSettings.iconWidth = 49;
            markerSettings.iconHeight = 73;
            markerSettings.backgroundColor = 'rgba(30,14,0,0.5)';
            markerSettings.arrowSize = 0;
            markerSettings.arrowPosition = 96;
            markerSettings.width = 400;
            markerSettings.height = 125;
        } else {
            markerSettings.iconWidth = 31;
            markerSettings.iconHeight = 46;
            markerSettings.backgroundColor = 'rgba(30,14,0,0.7)';
            markerSettings.arrowSize = 10;
            markerSettings.arrowPosition = 30;
        }
        var category = marker.type;

        var mapMarker = new google.maps.Marker({
            map: map,
            category: category,
            position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(mapMarker, 'click', function() {
            infowindow.setContent(marker.content);
            infowindow.open(map, mapMarker);
        });


        gmarkers1.push(mapMarker);
        // console.log(category);
        // console.log(gmarkers1);




    })
};


// Google map end