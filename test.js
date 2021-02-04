const sent    = require("./src/sentences")
    , utils   = require("./src/utils");

(async _ => {
    let sentence = await sent.getSentence();
    utils.print(sentence);
})();
