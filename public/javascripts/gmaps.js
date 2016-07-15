var map;


var x=-10;
var y =44;


function getLocation() {



  if (navigator.geolocation) {
       navigator.geolocation.watchPosition(showPosition);
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }


function showPosition(position) {

var lat = position.coords.latitude;
var lng = position.coords.longitude;
//Creating LatLng object with latitude and
//longitude.
var devCenter = new google.maps.LatLng(lat, lng);
map.setCenter(devCenter);
map.setZoom(18);


}








}





function initMap() {
 var myLatlng = {lat: x, lng: y};


 var x=-10;
 var y =44;


var point = document.getElementById('point');
map = new google.maps.Map(document.getElementById('map'), {


center: {lat: x, lng:y},
  zoom: 8



});


}
