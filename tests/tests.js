const sent = require("./lib/sentences.js");

async function testFunction(funct) {
    let sentence = "";

    if(funct.constructor.name == "AsyncFunction") {
        sentence = await funct();
        return sentence;    
    } else {
        return funct();
    }
}

sent.functArray.forEach(async (e) => {
    echo(await testFunction(e));
});

function echo(string) { console.log(string); }