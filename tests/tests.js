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

echo("Testing async functions: ");
async.forEach(async f => {
    let arr = await funct.loadAsync(5, f);
    echo(arr[0]);
    echo(arr[1]);
    echo(arr[2]);
    echo(arr[3]);
    echo(arr[4]);
    echo("");
});
echo("Testing sync functions: ");
sync.forEach(f => {
    let arr = funct.load(5, f);
    echo(arr[0]);
    echo(arr[1]);
    echo(arr[2]);
    echo(arr[3]);
    echo(arr[4]);
    echo("");
})

function echo(string) { console.log(string); }