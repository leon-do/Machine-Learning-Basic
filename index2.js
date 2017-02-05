/*these variables are similar to directions

				|
	NW	(-x,+y)	|	NE (+x, +y)
				|
		-----------------
				|
	SW (-x,-y)	|	SE (+x,-y)
				|

 */

// =======================================================================================================
// ================= The LOGIC ===========================================================================
// =======================================================================================================


// random coordinate. The machine will guess where xy belongs (NE or NW or SW or SE.)
var xy = [20,60];


//create coordinates
var NEarray = [];
var NWarray = [];
var SEarray = [];
var SWarray = [];


//populate variables with coordinates
for (var i = 0; i < 100000; i++){
	NEarray.push([randomPosi(), randomPosi()])
	NWarray.push([randomPosi(), randomNegi()])
	SWarray.push([randomNegi(), randomNegi()])
	SEarray.push([randomNegi(), randomPosi()])
}


//calculate nearest neightbor for each dataset
var distance = {
	NE: closestDistance(NEarray),
	NW: closestDistance(NWarray),
	SW: closestDistance(SWarray),
	SE: closestDistance(SEarray)
}

// find the shortest distance
var computerPrediction = smallestNum(distance)

console.log(computerPrediction)



// =======================================================================================================
// ================= The FUNCTIONS =======================================================================
// =======================================================================================================


//create random postive numbers
function randomPosi(){
	return Math.round(Math.random()*100)
}

//create random negative numbers
function randomNegi(){
	return Math.round(Math.random()* -100)
}




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



//get smallest number in an object
function smallestNum(obj){
	var objKey;
	var objValue;
	for (var i in obj) {
		if (!objKey) {
			objKey = i;
			objValue = obj[i];
		}
		if (obj[i] < objKey) {
			objKey = i;
			objValue = obj[i]
	;	}
	}

	return objKey;
}