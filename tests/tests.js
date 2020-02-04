const sent = require("../lib/sentences");
const funct = require("../lib/functions");

let sync = [];
let async = [];
sent.functArray.forEach( e => {
    if(e.constructor.name == "AsyncFunction") {
        async.push(e);
    }
    else { sync.push(e); }
});

let map  = {};
let amap = {};
let a = {};
function loadHash() {
    sync.forEach(f => {
        map[f.name] = funct.load(5, f);
    });
    a["Synchronous_Functions"] = map;
}

async function loadHashAsync() {
    async.forEach(async f => {
        amap[`${f.name}`] = await funct.loadAsync(5, f);
    });
    a["Async_Functions"] = amap;
}

loadHashAsync();
loadHash();

echo("Running tests on all functions...");
setTimeout(() => {
    echo(a);
}, 10000);

function echo(string) { console.log(string); }