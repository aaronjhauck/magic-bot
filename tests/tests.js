const sent = require("../lib/sentences");
const expect = require('expect');

let sync = [];
let async = [];
sent.functArray.forEach( e => {
    if(e.constructor.name == "AsyncFunction") {
        async.push(e);
    }
    else { sync.push(e); }
});

async.forEach(e => {
    it(`Testing ${e.name}`, async () => {
        let result = await e();

        expect(result).toReturn();
    })
})