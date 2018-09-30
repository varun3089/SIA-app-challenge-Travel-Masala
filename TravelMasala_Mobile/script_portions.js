document.getElementById('bread').style.borderRadius="30px";
document.getElementById('fish').style.borderRadius="30px";
document.getElementById('salad').style.borderRadius="30px";
document.getElementById('dessert').style.borderRadius="30px";

var dish="";
var final_array = [];

document.getElementById('bread').onclick = function(e){
  if (this.style.backgroundColor==="rgba(2,30,66,0.8)") { this.style.backgroundColor = "rgba(0,166,81,0.8)";}
  else {this.style.backgroundColor = "rgba(2,30,66,0.8)";}
  dish = this.id;
  document.getElementById('fullyeaten').style.border="0";
  document.getElementById('partiallyeaten').style.border="0";
  document.getElementById('uneaten').style.border="0";
};

document.getElementById('dessert').onclick = function(e){
  if (this.style.backgroundColor==="rgba(2,30,66,0.7)") {this.style.backgroundColor = "rgba(0,166,81,0.7)";}
  else {this.style.backgroundColor = "rgba(2,30,66,0.7)";}
  dish = this.id;
   document.getElementById('fullyeaten').style.border="0";
  document.getElementById('partiallyeaten').style.border="0";
  document.getElementById('uneaten').style.border="0";
};

document.getElementById('fish').onclick = function(e){
  if (this.style.backgroundColor==="rgba(2,30,66,0.7)") {this.style.backgroundColor = "rgba(0,166,81,0.7)";}
  else {this.style.backgroundColor = "rgba(2,30,66,0.7)";}
  dish = this.id;
  document.getElementById('fullyeaten').style.border="0";
  document.getElementById('partiallyeaten').style.border="0";
  document.getElementById('uneaten').style.border="0";
};

document.getElementById('salad').onclick = function(e){
  if (this.style.backgroundColor==="rgba(2,30,66,0.7)") {this.style.backgroundColor = "rgba(0,166,81,0.7)";}
  else {this.style.backgroundColor = "rgba(2,30,66,0.7)"; }
  dish = this.id;
  document.getElementById('fullyeaten').style.border="0";
  document.getElementById('partiallyeaten').style.border="0";
  document.getElementById('uneaten').style.border="0";
};


document.getElementById('fullyeaten').onclick = function(e){
  if(this.style.border==="5px solid rgba(0,166,81,0.7)") {this.style.border="0";}
  else {this.style.border="5px solid rgba(0,166,81,0.7)";}
  document.getElementById(dish).style.backgroundColor = "rgba(0,166,81,0.7)";
  final_array.push(dish+"=Fully-eaten");
};

document.getElementById('partiallyeaten').onclick = function(e){
  if(this.style.border==="5px solid rgba(0,166,81,0.7)") {this.style.border="0";}
  else {this.style.border="5px solid rgba(0,166,81,0.7)";}
  document.getElementById(dish).style.backgroundColor = "rgba(0,166,81,0.7)";
  final_array.push(dish+"=Partially-eaten");
};

document.getElementById('uneaten').onclick = function(e){
  if(this.style.border==="5px solid rgba(0,166,81,0.7)") {this.style.border="0";}
  else {this.style.border="5px solid rgba(0,166,81,0.7)";}
  document.getElementById(dish).style.backgroundColor = "rgba(0,166,81,0.7)";
  final_array.push(dish+"=Uneaten");
};

function loadData(data) {
	var settings = {
		"async": true,
		"url": "/destinations/food/sap/sia/services/tables.xsjs?cmd=f",
		"method": "POST",
		"headers": {
			"content-type": "application/json",
			"cache-control": "no-cache"
		},
		"data":JSON.stringify(data)
	};
	$.ajax(settings).done(function (response) {
		console.log("posted");
	});
}

document.getElementById('submit').onclick = function(e){
	var fish_q="";
	var salad_q="";
	var bread_q="";
	var dessert_q="";
	for (var i=0;i<final_array.length;i++) {
		var a = final_array[i].split("=");
		if (a[0] === "fish") { fish_q = a[1]; }
		else if (a[0] === "salad") { salad_q = a[1]; }
		else if (a[0] === "bread") { bread_q = a[1]; }
		else { dessert_q = a[1]; }
	}
	var final_json = {
		"name": "Kimberly",
		"mealtype":"lunch",
		"fish":fish_q,
		"bread":bread_q,
		"salad":salad_q,
		"dessert":dessert_q
	};
	loadData(final_json);
	alert("Consumption noted!");
};


