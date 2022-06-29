//function to show location of observatory with the ID choosen in displaylistpage
function displayMap(){  
				for (observe of observeArray){
				if(observe.observeid==id)
		{ 			const longitude = observe.latLong.lng;    //lat and long coordinates from JSON file
					const latitude  = observe.latLong.lat;
					
mapboxgl.accessToken = 'pk.eyJ1IjoibW0xOGFmdiIsImEiOiJja3Z4MWYzMWwzdWFpMndrbDVoa3RsZm54In0.0x-Eb8iv8cFupFNT1xpfnA';
const map = new mapboxgl.Map({
container: 'map', //link to map element in html
style: 'mapbox://styles/mapbox/streets-v11', 
center: [longitude, latitude], 
zoom: 12
}); 

//marker
const marker = new mapboxgl.Marker({ color: 'red', rotation: 45 })
.setLngLat([longitude, latitude])
.addTo(map);
		}
	}							
 }
  
//geolocation function
function geoFindMe() {
	  if (!navigator.geolocation){
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	  }	
// link to div element in html
	  const output = document.getElementById("out");	 
// function to be called if geolocation is successful
	  function success(position) {
		const latitude  = position.coords.latitude;  
		const longitude = position.coords.longitude;
//confirmation of lat long for user and call displaymap2 function
	output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
	displayMap2(longitude, latitude);
	  };
	//error message
	  function error() {
	  output.innerHTML = "Unable to retrieve your location";
	  };
//output status message
	  output.innerHTML = "<p>Locating…</p>";
//attempt geolocation
	  navigator.geolocation.getCurrentPosition(success, error);
}

//function to display geolocation
function displayMap2(lng, lat)
	{
mapboxgl.accessToken = 'pk.eyJ1IjoibW0xOGFmdiIsImEiOiJja3Z4MWYzMWwzdWFpMndrbDVoa3RsZm54In0.0x-Eb8iv8cFupFNT1xpfnA';
const map = new mapboxgl.Map({
container: 'map', //link to map element in html
style: 'mapbox://styles/mapbox/streets-v11', 
center: [lng, lat], 
zoom: 12 
});

//marker
const marker2 = new mapboxgl.Marker({ color: 'blue', rotation: 45 })
.setLngLat([lng, lat])
.addTo(map);
} 

