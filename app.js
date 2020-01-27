var sent = require("./sentences");
var twit = require("twit");
var keys = require("./keys");
var Twitter = new twit(keys);

var sentence = sent.getSentence();

Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
    console.log(data)
  });