//function to display the list of observatories after sorting
function displaySortObs() {
	document.querySelector("#observeList").innerHTML = '';			
	var observeArray= sortObs;

for( observe of observeArray)
	
	{

		const detailHTML='<div class="panel panel-primary "><div class="panel-heading"> '+ observe.displayName +' </div>'		
					+ '<div class=" row"><div class="col-sm-4"> <img src="'+ observe.image +'" alt="observatory image" class="thumbnail" ;"></div><div class="col-sm-8"> '
					+ '<div class="panel-body"><b>Area: </b>'+ observe.Area +'</div>'
					+ '<div class="panel-body"><b>Address: </b>'+ observe.Address +''+ '  '+ observe.postCode +'</div>'
					+ '<div class="panel-body"><b>Details: </b>'+ observe.details +'</div>'
					+ '<div class="panel-body"><b>Tags: </b>'+ observe.tags +'</div>'
					+ '<div class="panel-body"><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" onclick=showDetail("' + observe.observeid + '")> More info..</button> </div>'
					+'</div>';
		
		
	document.querySelector("#observeList").innerHTML += detailHTML;
	
	
	}
	
}
