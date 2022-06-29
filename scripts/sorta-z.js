//function to sort observatories by a-z
//all other variables are global so they are in the controller
var selectOpt= document.querySelector('#AtoZ');

//upon making selection an event listerner has been added to the action click
selectOpt.addEventListener("click", sortOb);

//sort function code
function sortObserveAtoZ(property) { 

   return function(a, b) {  //compare function a,b
        if (a[property] > b[property]) {   
            return 1;    //b sorted lower than a return 1
        } else if (a[property] < b[property]) {    
            return -1;    //b sorted greater than a return -1
        }    
        return 0; 
    };    
}   

//function to display the sorted code is in a script file
function sortOb(){ 
sortObs.sort(sortObserveAtoZ("displayName"));
displaySortObs();
}



