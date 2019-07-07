var express = require('express');
var app = express();
var request = require('request')
app.set('view engine', 'ejs');

var port = 3000;
app.get("/", function(req, res){
    res.render("search");
});
app.get("/resulst", function(req, res){
  var pojam = req.query.search;
  var url = "http://www.omdbapi.com/?s="+pojam+"&apikey=thewdb";
             
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
})



app.listen(port, function(){
    console.log("Aplikacija radi na portu "+port);
});