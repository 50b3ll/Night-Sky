//JS file controller for detailpage.html and Observatories JSON file//

//code to run the displayObserves and displayMap functions when the page is loaded//
document.querySelector('body').onload= function(){ showDetail();displayMap();}
	 var observeArray= observeListJSON.observe
	 const params = new URLSearchParams(window.location.search)  
	 const id=params.get('id');
	 




