const sent    = require("../lib/sentences");

function loggr(str, err=false) {
  let today = new Date();
  let date =  (today.getMonth() + 1) + '/' + today.getDate() + "/" + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  err ? console.error(`[${date}:${time}] [ERROR] ${str}`) 
      : console.log(`[${date}:${time}] ${str}`);
}

function MockTweet(str) { console.log(str); }

async function TestIt() {
    let sentence = await sent.getSentence();

    loggr("Begining tweet function...");
    loggr(`Sentence: ${sentence}.`);

    try {
        MockdTweet(sentence);
        loggr("Tweeted successfully.");
    }
    catch (err) {
        loggr("Unable to send tweet.", true);
        loggr(err, true);
    }

    setTimeout(() => {
      loggr("Testing time...");
    }, 3000);
}

TestIt();