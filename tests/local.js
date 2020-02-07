const sent = require("../lib/sentences");
const Log  = require("../lib/log").Log;

let log = new Log();

function MockTweet(str) { 
    echo("[-- DEBUG --------]");
    echo(`[-- WOULD TWEET --] ${str}`);
    echo("[-- DEBUG --------]");
}

async function TestIt() {
    let sentence = await sent.getSentence();

    log.begin("Begining tweet function...");
    log.print(`Sentence: ${sentence}`);

    try {
        MockTweet(sentence);
        log.print("Tweeted successfully.");
    }
    catch (err) {
        log.error("Unable to send tweet.");
        log.error(err);
    }

    setTimeout(() => {
      log.print("Testing time actually changes...");
    }, 3000);
    log.end();
}

function echo(str) { console.log(str); }

TestIt();