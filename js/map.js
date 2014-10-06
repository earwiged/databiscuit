var myLatlng    = ""
var mapColor    = "";
    

function initialize(_myLatlng, _color) {

    myLatlng        = _myLatlng
    mapColor        = _color;
    

    var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        fillColor: mapColor,
        strokeOpacity: 1.0,
        strokeColor: mapColor,
        strokeWeight: 1.0, 
        scale: 6
    };
   

    // Global Map Options
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(42.466695,-31.142579), /*setting up the coordinate for position of map*/
        streetViewControl: false,
        // disable scroll wheel zoom 
        scrollwheel: false,
        //hide controls
        disableDefaultUI: true, 
		zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.LEFT_TOP
        },
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.NORMAL,
            position: google.maps.ControlPosition.LEFT_TOP
        }, 
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Set the Market
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    var marker = new google.maps.Marker({
       position: myLatlng,
       icon: circle
    });
	
	
	var myLatLng = new google.maps.LatLng(55.680036,12.568588);
	
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: circle
		
	});
	
	var myLatLng = new google.maps.LatLng(38.90083,-77.036247);
	
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: circle
		
	});
	
	var myLatLng = new google.maps.LatLng(32.803051,-96.799622);
	
	
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: circle
		
	});
	
	
	

    // Initialise the Marker
    marker.setMap(map);

    // Set the Maps style using the JSON array from http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
	
    var styles = [
      {
        "featureType": "administrative",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "visibility": "on" },
          { "color": "#202020" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "color": "#3c3c3c" }
        ]
      }
    ] 

    map.setOptions({
        styles: styles
    });
}

function reSizeMap(){
    //console.log("reSizeMap");

    var mapOptions = {
        center: myLatlng,
    };

    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
}
// Initialise the Map





