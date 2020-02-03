const twit    = require("twit")
    , keys    = require("./resource/keys")
    , Twitter = new twit(keys)
    , sched   = require("node-schedule")
    , sent    = require("./lib/sentences");

async function tweet() {
	var sentence = await sent.getSentence();

	Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
		console.log(data)
	});
}

 var job = sched.scheduleJob('0 */10 * * *', tweet);
