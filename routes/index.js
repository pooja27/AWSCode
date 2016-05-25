
/*
 * GET home page.
 */

// Retrieve
var MongoClient = require('mongodb').MongoClient;

exports.putHelloWorld = function(req, res) {
	var val = req.body.value;
	console.log(req.body.value);
	MongoClient.connect("mongodb://localhost:27017/cmpe281final", function(err,
			db) {
		if (err) {
			console.dir(err);
			res.status(503).send({
				'count' : 0
			});
		} else {
			var collection = db.collection('helloworld');
			console.log(collection);
			var doc1 = {
				'value' : val
			};
			collection.insert(doc1);
			res.status(200).send({ 'message' : "inserted"});
		}
	});
}

exports.getHelloWorld = function(req, res) {	
    MongoClient.connect("mongodb://localhost:27017/cmpe281final", function(err, db) {console.log("Hello");
	var options = {
			host : mongo.URL,
			port : mongo.PORT,
			path : "/getHelloWorld",
			method : 'GET'
		};

		callback = function(response) {
			var str = '';
			console.log(response.statusCode);
			response.on('error', function() {
				console.log("Error in response: " + "\n" + str);

			})
			response.on('data', function(chunk) {
				str += chunk;
			});

			response.on('end', function() {
				var data = JSON.parse(str);
				res.status(200).send(data);
			});
		}

		http.get(options, callback).end();});
};


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};