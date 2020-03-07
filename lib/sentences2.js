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

function d() {
    let players = funct.getPlayerArray(1);

    return `${players[0]} plays with his lands at the top of his playmat.`
}

function e() {
    let players  = funct.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let instant  = helper.getTopInstant();

    return `${players[0]} should have waited on his ${creature}. ${players[1]} was practically telegraphing the ${instant}.`
}

function f() {
    let players = funct.getPlayerArray(1);
    let sorcery = helper.getTopSorcery();

    return `Sorry ${players[0]}, ${sorcery} won't save you this time.`
}

function g() {
    let players = funct.getPlayerArray(2);
    let creatures = funct.getCreatureArray(2);

    return `In careless combat, ${players[0]} swings ${creatures[0]} into ${players[1]}'s ${creatures[1]}.`;
}

function h() {
    let players = funct.getPlayerArray(2);
    let creatures = funct.getCreatureArray(1);

    return `No spells will resolve if ${players[0]} has anything to say about it. Looks like ${players[1]} is on the ${creatures[0]} beat down plan.`;
}

function i () {
    let players     = funct.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let card        = helper.getSaltyCard();

    return `Still unsure what ${players[0]}'s ${enchantment} does, ${players[1]} assumes his ${card} will handle it.`;
}

function j () {
    let land = helper.getTopLands();
    let players = funct.getPlayerArray(1);

    return `"${land}, tapped. Pass.", exlaims ${players[0]}.`;
}

function k () {
    let players = funct.getPlayerArray(1);
    let creature = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Fully tilted, ${players[0]} puts ${creature} and ${enchantment} on the board at the same time - paying for each after he cast them.`;
}

function l () {
    let players = funct.getPlayerArray(1);

    return `${players[0]} is absolutely in the tank.`;
}

function m () {
    let players = funct.getPlayerArray(1);
    let salt    = helper.getSaltyCard();

    return `It was a long road, but ${salt} finally brought ${players[0]} kicking and screaming across the finish line.`;
}

function n () {

}
function o () {

}
function p () {

}
function q () {

}
function r () {

}
function s () {

}
function t () {

}
function u () {

}
function v () {

}
function w () {

}
function x () {

}
function y () {

}
function z () {

}
console.log(m());