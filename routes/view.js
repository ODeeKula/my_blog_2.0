var express = require('express');
var router = express.Router();
var Posts = require("../db.json");
var request = require("request");

/* GET home page. */
router.get('/:id', function(req, res, next) {
  request({
   uri: "http://localhost:8000/posts/" + req.params.id,
   method: "GET"
  }, function(error, response, body) {
       console.log(JSON.parse(body));


       res.render('readMore', {posts: JSON.parse(body)});
       
   });
});

 module.exports = router;
