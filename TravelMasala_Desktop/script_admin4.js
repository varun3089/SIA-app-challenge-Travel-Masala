function getData() {
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "/destinations/food/sap/sia/services/tables.xsjs?cmd=getF",
	  "method": "GET",
	  "headers": {
	    "cache-control": "no-cache"
	  }
	};
	$.ajax(settings).done(function (response) {
	  var json = response[0];
	  
	  if (json.fish === "Fully-eaten") { var fishcolor = "green"; }
	  else if (json.fish === "Partially-eaten") { var fishcolor = "orange"; }
	  else { var fishcolor = "red"; }
	  document.getElementById('fish').innerHTML=" - "+json.fish;
	  document.getElementById('fish').style.color=fishcolor;
	  
	  if (json.bread === "Fully-eaten") { var breadcolor = "green"; }
	  else if (json.bread === "Partially-eaten") { var breadcolor = "orange"; }
	  else { var breadcolor = "red"; }
	  document.getElementById('bread').innerHTML=" - "+json.bread;
	  document.getElementById('bread').style.color=breadcolor;
	  
	  if (json.salad === "Fully-eaten") { var saladcolor = "green"; }
	  else if (json.salad === "Partially-eaten") { var saladcolor = "orange"; }
	  else { var saladcolor = "red"; }
	  document.getElementById('salad').innerHTML=" - "+json.salad;
	  document.getElementById('salad').style.color=saladcolor;
	  
	  if (json.dessert === "Fully-eaten") { var dessertcolor = "green"; }
	  else if (json.dessert === "Partially-eaten") { var dessertcolor = "orange"; }
	  else { var dessertcolor = "red"; }
	  document.getElementById('dessert').innerHTML=" - "+json.dessert;
	  document.getElementById('dessert').style.color=dessertcolor;
	});
}
var count=0;
var start = setInterval(function(){ 
	count=count+1;
	getData();
	if (count>60) { clearInterval(start); }
}, 3000);

