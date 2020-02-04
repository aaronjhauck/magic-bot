const twit    = require("twit")
    , keys    = require("./resource/keys")
    , Twitter = new twit(keys)
    , sched   = require("node-schedule")
    , sent    = require("./lib/sentences")
    , log     = require("./lib/helpers");

function tweet(sentence) {
	Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
		log.loggr(data);
	});
}

var job = sched.scheduleJob('0 */10 * * *', async function () {
    let sentence = await sent.getSentence();

    log.loggr("Begining tweet function...");
    log.loggr(`Sentence: ${sentence}.`);
    log.loggr("Attepting to tweet...");

    try {
        tweet(sentence);
        log.loggr("Tweeted successfully!")
    }
    catch (err) {
        log.loggr("Unable to send tweet.", true);
        log.loggr(err, true);
    }
});
