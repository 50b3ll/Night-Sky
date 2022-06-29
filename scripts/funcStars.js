//script to run star ratings

//code to bring up name of observatory being rated	  
	  for (observe of observeArray){
		  if(observe.observeid==id) { 	
			  const nameHTML=' <b>'+ observe.displayName +' is rated:</div>'
	document.querySelector("#observeName").innerHTML += nameHTML;
			   }
	  }	

buildRating(observeListJSON.observe);

function buildRating(data) {
	  data.forEach(function(x) {
	if (x.observeid==id){ 			  
    createRatingElement(x.rating);
	} });
}

function createRatingElement(numberOfStars) {
  var wrapper = document.createElement('div');
  for (var i = 1; i <= 5; i++) {
    var span = document.createElement('span')
    span.innerHTML = (i <= numberOfStars ? '★' : '☆');
    span.className = (i <= numberOfStars ? 'high' : '');
    wrapper.appendChild(span);
  }
  document.getElementById('img-container').appendChild(wrapper);
}

