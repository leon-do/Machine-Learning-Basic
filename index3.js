/*

using a sql database to store machine learning data

aaa = +++
bbb = ---
aba = +-+
etc...

*/

// answer should be aaa because they're all positive
var target1 = 40;
var target2 = 30;
var target3 = 80;


var Sequelize = require("Sequelize")


// CONNECT TO SERVER
var sequelize = new Sequelize('machineDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


sequelize.query("SELECT * FROM machineTables").then(function(row){
	loopThroughData(row[0])
})

function loopThroughData(allData){

	var shortestDistance = Infinity;
	var type;

	for (var i = 0; i < allData.length; i++){
		var data1 = allData[i].data1;
		var data2 = allData[i].data2;
		var data3 = allData[i].data3;

		// Euclidean equation
		var distance = Math.sqrt(Math.pow(data1-target1,2) + Math.pow(data2-target2,2) + Math.pow(data3-target3,2))

		if (distance < shortestDistance){
			shortestDistance = distance;
			answer = allData[i].type;
		} 

	}
	console.log(shortestDistance)
	console.log(answer)

}








//