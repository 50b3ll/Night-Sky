//function to display the data about the observatories in the webpage//
  function showDetail(){

//loop to run through the observatories array if the object has a unique ID//
	  for (observe of observeArray){
		  if(observe.observeid==id)
		{ 	
			  const detailHTML='<div class="card"><div class="card-header"> '+ observe.displayName +' </div>'
			  		+ '<div class="card-body" > <img src="'+ observe.image +'" alt="observatory image" class="thumbnail2" >'
					+ '<p><b>Area: </b> '+ observe.Area + '</p>'
					+ '<p><b>Address: </b>'+ observe.Address +''+ '  '+ observe.postCode +'</p>'
					+ '<p><b>Contact: </b>'+ observe.contact + '</p>'
					+ '<p><b>Description: </b>'+ observe.description + '</p>'
					+ '<p><b>Features: </b>'+ observe.facilities + '</p>'
					+ '<p><b>Light Polution: </b>'+ observe.lightPolution + '</p>'
					+ '<p><b>Open to Public: </b>'+ observe.publicYN + '</p>'
					+ '<p><img src=" '+ observe.imageCar2.img1 +'"class="gallery"><img src="   '+ observe.imageCar2.img2 +' "class="gallery"></p><br><br><br>	'
					+ '<button type="button" class="btn btn-primary" onclick="geoFindMe()">Show my location</button>'				
					+ '<div id="map"  style="width: 400px; height: 300px; margin-left:180px; "></div><br>	'						
				    +'<div id="out"></div>'
					+ '</div></div> ';
		
//get the div element observeProfile in detailpage.html file tp display the data//		
	document.querySelector("#observeProfile").innerHTML += detailHTML;
			  
		  }
	  }	  
  } 
  