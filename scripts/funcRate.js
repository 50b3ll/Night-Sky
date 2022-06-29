//function to allow user to set a rating
//local variables

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');	

function setRating() {	
	for (observe of observeArray){
		  if(observe.observeid==id){  
		  
	const myRating = parseFloat(prompt('Please enter your rating 1-5'));//string to be parsed into an int

  localStorage.setItem('rating', myRating); //save value in local storage
  myHeading.innerHTML = '<h3>I rate ' + observe.displayName + '  ' + myRating +' stars </h3>';

//will take value from storage and add it to the value in JSON file and average eventually
}
}}

myButton.onclick = function() {
  setRating();
}

