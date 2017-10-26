numGrid = 24;

color = "black";
function createGrid(numGrid) {
	for(var i = 0; i < numGrid + 1; i++){
		$(".wrap").append("<div id='" + i + "'class = 'case'></div>");
		for(var j = 0; j<numGrid; j++){
			$("div#" + i).append("<div class = 'cubes'></div>");
		}
	}
}

function clear() {
	color = "black";
	$(".cubes").css("background-color", "#9fb1ce");
}

$(document).ready(function(){

	createGrid(numGrid);

	var reset = document.getElementById("reset");
	var black = document.getElementById("black");
	var red = document.getElementById("red");
	var blue = document.getElementById("blue");
	var yellow = document.getElementById("yellow");

	reset.addEventListener('click', function(){
		clear();
	});

	black.addEventListener('click', function(){
		color = "black";
	});

	red.addEventListener('click', function(){
		color = "red";
	});

	blue.addEventListener('click', function(){
		color = "blue";
	});

	yellow.addEventListener('click', function(){
		color = "yellow";
	});

	$(".cubes").hover(function(){
		$(this).css("background-color", color);
	});
})