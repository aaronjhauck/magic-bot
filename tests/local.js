const sent = require("../lib/sentences");
const log  = require("../lib/helpers");

function MockTweet(str) { 
    echo("[-- DEBUG --------]");
    echo(`[-- WOULD TWEET --] ${str}`);
    echo("[-- DEBUG --------]");
}

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
      log.loggr("Testing time actually changes...");
    }, 3000);
}

function echo(str) { console.log(str); }

TestIt();