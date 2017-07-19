var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

// app.get('/', function(req, res){
// res.send('Check your console!');
// });  
app.get('/scrape', function(req, res){

  var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
    }
    else{
        console.log(error);
    }
});



/*  url = 'http://directory.stokesentinel.co.uk/search/stoke-on-trent%2Cstaffordshire/bike-manufacture';

  request(url, function(error, response, html){
    console.log(error);
     console.log("---");
    console.log(response);
    if(!error){
      var $ = cheerio.load(html);

     var getTitle = $('.ser-title').html();
      console.log(getTitle);
        console.log("---");

      var Shoptitle, number, rating;
      var json = { Shoptitle : ""};

      $('.ser-title').filter(function(){
        var data = $(this);
        Shoptitle = data.children().first().text().trim();
        // release = data.children().last().children().last().text().trim();

        console.log(Shoptitle);
        console.log("---");
        json.Shoptitle = Shoptitle;
        // json.number = number;
      })

      // $('.span2').filter(function(){
      //   var data = $(this);
      //   rating = data.text().trim();

      //   json.rating = rating;
      // })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })*/
})


 app.listen(3030, function () {
console.log("express has started on port 3030");
});

// console.log(json);
