var twit    = require("twit");
var sched   = require("node-schedule");
var sent    = require("./sentences");
var keys    = require("./keys");
var Twitter = new twit(keys);

// function tweet() {
//   var sentence = sent.getSentence();

//   Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
//     console.log(data)
//   });
// }

// var job = sched.scheduleJob('0 0 */8 * *', tweet);

async function tweet() {
  var sentence = await sent.getSentence();

  console.log(sentence);
}

tweet();