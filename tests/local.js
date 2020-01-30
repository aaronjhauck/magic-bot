const sent    = require("../lib/sentences");

async function print() {
  var sentence = await sent.getSentence();

  console.log(sentence);
}

print();
