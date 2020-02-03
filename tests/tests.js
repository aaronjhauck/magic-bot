const sent = require("../lib/sentences");
const funct = require("../lib/functions");
// async function testFunction(funct) {
//     let sentence = "";

//     if(funct.constructor.name == "AsyncFunction") {
//         sentence = await funct();
//         return sentence;    
//     } else {
//         return funct();
//     }
// }

// sent.functArray.forEach(async (e) => {
//     echo(await testFunction(e));
// });

let sync = [];
let async = [];
sent.functArray.forEach( e => {
    if(e.constructor.name == "AsyncFunction") {
        async.push(e);
    }
    else { sync.push(e); }
});

let map = {};

async function loadHash() {
    sync.forEach(f => {
        let arr = funct.load(5, f);
        map[f.name] = arr;
    });
}

async function loadHashAsync() {
    await loadHash().then(
        async.forEach(async f => {
            let arr = await funct.loadAsync(5, f);
            map[f.name] = arr;
        })
    );
}

loadHashAsync();

echo(map);

function echo(string) { console.log(string); }