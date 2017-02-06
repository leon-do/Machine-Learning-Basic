/*

using a sql database to store machine learning data

*/

var target =
	{
		1: 40,
		2: 30,
		3: 80,
	} 

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


sequelize.query("SELECT * FROM machineTable WHERE data1=33").then(function(row){
	console.log(row)
})








//