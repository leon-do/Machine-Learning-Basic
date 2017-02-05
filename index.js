//make array of positive numbers
var posiArray = [];
for (var i =0 ; i < 100; i++){
	posiArray.push(Math.round(Math.random() * 100))
}	

//make array of negitive numbers
var negiArray = [];
for (var i =0 ; i < 100; i++){
	negiArray.push(Math.round(Math.random() * -100))
}



// pick a random number
var num = 10;


//get closest num from posiArray
var closestPosi = closestNumber(num, posiArray)
var closestNegi = closestNumber(num, negiArray)




// if the num is closer to posi, then it's positive
if (Math.abs(num-closestPosi) < Math.abs(num-closestNegi)){
	console.log('num is positive')
} else {
	console.log('num is negitive')
}







function closestNumber(num, array){
	var closestNum = array[0];
	for (var i = 0; i < array.length; i++){
		if (Math.abs(num - array[i]) < Math.abs(num - closestNum)){
			closestNum = array[i];
		}
	}
	return(closestNum)
}