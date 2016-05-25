
/*
 * GET home page.
 */

// Retrieve
var MongoClient = require('mongodb').MongoClient;


exports.getGumballCount = function(req, res) {
	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/cmpefinal281", function(err, db) {
		if (err) {
			 console.dir(err);
			 res.status(503).send(0);
		}
		/*var collection = db.collection('gumball');
		collection.find({color:'blue'}).toArray(function(err, items) {
			if(items.length > 0) {
				console.log(items);
				res.status(200).send(items);
			} else res.status(200).send(0);
		});*/
		
		console.log("Connection successful!");
		var collection = db.collection('gumball');
		collection.findOne({color:'blue'} , function(err, item) {
			if(item == null) res.status(404);
			else {
				console.log(item);
				res.status(200).send({ 'count' : item.count});
			}
		});
	});
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};