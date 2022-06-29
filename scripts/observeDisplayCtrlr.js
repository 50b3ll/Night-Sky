//JS file controller for displaylistpage.html and Observatories JSON file//

//code to run the displayObserves function when the page is loaded//
document.querySelector('body').onload= function() { displayObserves() };
document.querySelector("h1").innerHTML= 'List of ' + observeListJSON.catergory+ ' in the UK';

//global variables
var observeArray= observeListJSON.observe;
var sortObs =  observeListJSON.observe;
const selectCat = document.querySelector('#cat').value;

