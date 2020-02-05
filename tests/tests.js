const sent = require("../lib/sentences");
const expect = require('expect');

/**
 * Build indices of async
 * and non-async functions
 */
let sync = [];
let async = [];
sent.functArray.forEach( e => {
    if(e.constructor.name == "AsyncFunction") {
        async.push(e);
    }
    else { sync.push(e); }
});

/**
 * -- Tests for async functions --
 * Test A: The function returns something
 * Test B: The result contains no undefined variables
 */
async.forEach(e => {

    it(`Testing ${e.name} returns something`, async () => {
        let result = await e();
        expect(result).toReturn;
    })

    it(`Testing ${e.name} contains no undefined values`, async () => {
        let result = await e();
        expect(result).not.toMatch(/undefined/);
    })
});

/**
 * -- Tests for non-async functions --
 * Test A: The function returns something
 * Test B: The result contains no undefined variables
 */
sync.forEach(e => {

    it(`Testing ${e.name} returns something`, () => {
        let result = e();
        expect(result).toReturn;
    })

    it(`Testing ${e.name} contains no undefined values`, () => {
        let result = e();
        expect(result).not.toMatch(/undefined/);
    })
})