const sent = require("../lib/sentences");
const log  = require("../lib/helpers");

function MockTweet(str) { console.log(str); }

async function TestIt() {
    let sentence = await sent.getSentence();

    log.loggr("Begining tweet function...");
    log.loggr(`Sentence: ${sentence}.`);

    try {
        MockTweet(sentence);
        log.loggr("Tweeted successfully.");
    }
    catch (err) {
        log.loggr("Unable to send tweet.", true);
        log.loggr(err, true);
    }

    setTimeout(() => {
      log.loggr("Testing time...");
    }, 3000);
}

TestIt();