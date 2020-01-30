const sent = require("../lib/sentences");

let asyncArray = [];
let nosyncArray = [];

sent.functArray.forEach( e => {
    if(e.constructor.name == "AsyncFunction") {
        asyncArray.push(e);
    }
    else {
        nosyncArray.push(e);
    }
});

async function testFunction(funct) {
    let sentence = "";

    if(funct.constructor.name == "AsyncFunction") {
        sentence = await funct();
        return sentence;    
    } else {
        return funct();
    }
}

nosyncArray.forEach(async (e) => {
    echo(await testFunction(e));
});

asyncArray.forEach(async e => {
    echo(await testFunction(e));
});


function echo(string) { console.log(string); }