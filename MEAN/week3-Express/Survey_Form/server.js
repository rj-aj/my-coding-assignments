var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var port = process.env.PORT || 5002;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.get('/', function(request, response){
	response.render("index");
});

app.post("/results", function(request, response){
	console.log(request.body);
	response.render('results', request.body);
});


app.listen(port, () => console.log(`express server listening on port ${port}`));

