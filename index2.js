/*these variables are similar to directions

				|
	NW	(-x,+y)	|	NE (+x, +y)
				|
		-----------------
				|
	SW (-x,-y)	|	SE (+x,-y)
				|

 */


// random coordinate. The machine will guess where xy belongs (NE or SE or NW etc.)
var xy = [20,60];


//create coordinates
var NE = [];
var NW = [];
var SE = [];
var SW = [];


//populate variables with coordinates
for (var i = 0; i < 100000; i++){
	NE.push([randomPosi(), randomPosi()])
	NW.push([randomPosi(), randomNegi()])
	SW.push([randomNegi(), randomNegi()])
	SE.push([randomNegi(), randomPosi()])
}

var distance = {
	NEdistance: closestDistance(NE),
	NWdistance: closestDistance(NW),
	SWdistance: closestDistance(SW),
	SEdistance: closestDistance(SE)
}

console.log(distance)



// find closest distance
function closestDistance(coordinates){
	for (var i = 0; i < coordinates.length; i++){
		var shortestDistance = Math.sqrt(Math.pow(xy[0] - coordinates[0][0],2) + Math.pow(xy[1] - coordinates[0][1],2))
		var c = Math.sqrt(Math.pow(xy[0] - coordinates[i][0],2) + Math.pow(xy[1] - coordinates[i][1],2))

		if (c < shortestDistance){
			shortestDistance = c;
		}
	}
	return c
}





//create random postive numbers
function randomPosi(){
	return Math.round(Math.random()*100)
}

//create random negative numbers
function randomNegi(){
	return Math.round(Math.random()* -100)
}