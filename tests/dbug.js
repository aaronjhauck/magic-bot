const sent    = require("./sentences");

async function print() {
  var sentence = await sent.getSentence();

  console.log(sentence);
}

print();
