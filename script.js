function initMap() {
	var loc = {lat: 41.833520, lng: -87.626076};
	var map = new google.maps.Map(document.getElementById('map'), {center: loc, zoom: 14});

	var infowindow = new google.maps.InfoWindow({content: 'My Dorm Room'});

	var marker = new google.maps.Marker({position: loc,map: map,icon: 'media/location.png'});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}