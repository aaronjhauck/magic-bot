const helper = require("./helpers")
    , funct  = require("./functions")
    , utils  = require("node-blutils");

function a() {
    let players   = funct.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let card      = helper.getTopCard();

    return `${players[0]} thinks it's pretty unfair ${players[1]} runs a ${card}. Ironic coming from a guy playing ${saltyCard}.`;
}

function b() {
    let players = funct.getPlayerArray(2);
    let phase   = helper.getInstantPhase();
    let land    = helper.getTopLands();

    return `${players[0]} decides ${players[1]}'s ${phase} is the optimal time to fetch up a ${land}.`;
}

function c() {
    let players = funct.getPlayerArray(1);
    let artifact = helper.getTopArtifact();

    return `No, ${players[0]} - we can't rewind because you forgot to activate your ${artifact}.`;
}
console.log(c());