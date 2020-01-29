const twit    = require("twit")
    , keys    = require("./keys")
    , Twitter = new twit(keys)
    , sched   = require("node-schedule")
    , sent    = require("./sentences");


// async function tweet() {
//   var sentence = await sent.getSentence();

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