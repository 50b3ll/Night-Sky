
//callback function is called at the back of the function it is passed into
//function provided to other code to allow it to be called by that code
function makeNewRequest(url, requestType, callback, body) {
			
			//error check
			console.log("Making a request to ... " + url);
			
    //creates a new XMLHttpRequest object, sends requst to server
	httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
		//error check
      console.log('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }	
	//property specifies a function to be executed every time the status of the XML request changes
    httpRequest.onreadystatechange = callback;  //callback func attached to event handler
    httpRequest.open(requestType, url);
    httpRequest.send(body);  //opens connection and sends data
}

//function to control the processing of data when the response is recieved
//XHR POST request
function processRatingResponse () {
	//when the status property is 200, the response is ready
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
		  		//error check
        console.log("request returned, processing data ... \n" + httpRequest.responseText);
  
      } else {
		  		//error check
        console.log('There was a problem with the request.');
      }
    }
}

//function to send data to the server and print a confimation to the user
function setReview() {
		for (observe of observeArray){
		  if(observe.observeid==id){ 
//revText property returns the server response as a text string which can be used to update the web page	  
  var revText = document.getElementById("myReview").value;

  document.getElementById("reviews").innerHTML = 'Successfully posted!        ' +revText;
//save review text input by user in local storage  
   localStorage.setItem('review', revText);  
//post request to server
  makeNewRequest('https://pedro.cs.herts.ac.uk/mm18afv/public/aws/submitReview.php', "POST", processRatingResponse, revText);  
}
	}	
		}