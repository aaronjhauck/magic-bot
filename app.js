const twit    = require("twit")
    , keys    = require("./resource/keys")
    , Twitter = new twit(keys)
    , sched   = require("node-schedule")
    , sent    = require("./lib/sentences");

function tweet(sentence) {
	Twitter.post('statuses/update', { status: sentence }, function(err, data, response) {
		console.log(data)
	});
}

function now() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return `${date} ${time}`;
}

var job = sched.scheduleJob('0 */10 * * *', async function () {
    let sentence = await sent.getSentence();

    console.log(now(), "- Begining tweet function...");
    console.log(now(), "- Sentence: ${sentence}.");
    console.log(now(), "- Attepting to tweet...");

    try {
        tweet(sentence);
        console.log(now(), "- Tweeted successfully.");
    }
    catch (err) {
        consoel.log(now(), "- Unable to send tweet.");
        console.error(err);
    }
});
