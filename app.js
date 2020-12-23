const twit    = require("twit")
    , keys    = require("./src/keys")
    , sched   = require("node-schedule")
    , sent    = require("./src/sentences")
    , utils   = require("./src/utils")
    , Twitter = new twit(keys);

const tweet = (sentence) => {
    Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
		console.log(data);
	});
}

let job = sched.scheduleJob('0 13 * * 0,2,4,5', async function () {
    let sentence = await sent.getSentence();

    utils.print("Begining tweet function...");
    utils.print(`Sentence: ${sentence}.`);
    utils.print("Attepting to tweet...");

    try {
        tweet(sentence);
        utils.print("Tweeted successfully!")
    }
    catch (err) {
        utils.err("Unable to send tweet.");
        utils.err(err);
    }
});
