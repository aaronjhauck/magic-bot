const twit    = require("twit")
    , keys    = require("./resource/keys")
    , Twitter = new twit(keys)
    , sched   = require("node-schedule")
    , sent    = require("./lib/sentences")
    , Log     = require("./lib/log").Log;

let log = new Log();

function tweet(sentence) {
	Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
		console.log(data);
	});
}

var job = sched.scheduleJob('0 */10 * * *', async function () {
    let sentence = await sent.getSentence();

    log.begin("Begining tweet function...");
    log.print(`Sentence: ${sentence}.`);
    log.print("Attepting to tweet...");

    try {
        tweet(sentence);
        log.print("Tweeted successfully!")
    }
    catch (err) {
        log.error("Unable to send tweet.");
        log.error(err);
    }
    log.end();
});
