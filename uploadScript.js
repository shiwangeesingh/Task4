var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	dbo.createCollection("collection", function(err, res) {
		if (err) throw err;
		var XLSX = require('xlsx')
        var workbook = XLSX.readFile('JournAlongDummy Data.xlsx');
		var sheet_name_list = workbook.SheetNames;
		var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        dbo.collection("collection").insertMany(xlData, function(err, res) {
        	if (err) throw err;
        	db.close();
        });
    });
});