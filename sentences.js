const helper = require("./helpers")
    , funct  = require("./functions");
/*
-- Sentence Functions --
There is probably a much better way of doing this, but 
for now - this implementation is fine. We want to generate 
a new random variable every time the function is called. To add a 
new sentence, define the function as a letter and add  it to the 
getSentence() method at the bottom of this file
*/
async function a() {
    let general = await funct.getRandomGeneral();
    let card    = helper.getTopCard();
    let player  = helper.getPlayer();

    return `${player} snuck a copy of ${card} into his ${general} deck.`;
}

function b() {
    let players = funct.getPlayerArray(2);
    let phase   = helper.getInstantPhase();
    let spell   = helper.getTopSorcery();

    return `During ${players[0]}'s ${phase}, ${players[1]} attempts an instant speed ${spell}.`;
}

function c() {
    let player = helper.getPlayer();
    let spell  = helper.getTopInstant();

    return `Moving to his second main phase, ${player} tanks and jams ${spell}.`;
}

function d() {
    let player      = helper.getPlayer();
    let card        = helper.getTopInstant();
    let creature    = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${card} up to protect his ${enchantment}.`;
}

function e() {
    let player = helper.getPlayer();

    return `Hey ${player} - did you read the card?`;
}

async function f() {
    let player = helper.getPlayer();

    let a = helper.getTopLands();
    let b = await funct.getCardArray(1);
    let c = helper.getTopCard();
    let d = helper.getTopLands();
    let e = helper.getTopCard();

    return `${player} mulled to a hand of ${a}, ${b}, ${c}, ${d}, and ${e}.`;
}

function g() {
    let players = funct.getPlayerArray(2);
    let card    = helper.getTopCard();
    let spell   = helper.getTopInstant();

    return `At a critical juncture, ${players[0]} attempts to resolve ${card}. ${players[1]} snap responds with ${spell}.`;
}

function h() {
    let players  = funct.getPlayerArray(2);
    let card     = helper.getTopCard();
    let creature = helper.getTopCreature();
    let reaction = helper.getReaction();

    return `Victory is close. With ${card} in hand, ${players[0]} slams ${creature}. ${players[1]} ${reaction}.`;
}

function i() {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let spell       = helper.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${spell}.`;
}

function j() {
    let player = helper.getPlayer();

    return `${player} declines to pay (2) for Smothering Tithe.`;
}

function k() { 
    let player = helper.getPlayer();
    let card   = helper.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

function l() {
    let player      = helper.getPlayer();
    let spell       = helper.getTopSorcery();
    let enchantment = helper.getTopEnchantment();

    let mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return `It's a toss up between ${spell} and ${enchantment}, so ${player} spends ${mins} minutes tutoring.`;
}

async function m() {
    let player = helper.getPlayer();
    let cards = await funct.getCardArray(2);
    let land  = helper.getTopLands();

    return `After activating Top - ${player} puts ${cards[0]}, ${land}, and ${cards[1]} back in the exact order he found them in.`;
}

function n() {
    let players = funct.getPlayerArray(2);
    let spell = helper.getTopSorcery();

    return `${players[0]}'s crucial, game winning ${spell} is put on the stack. ${players[1]} is already shuffling for the next game`;
}

function o() {
    let player = helper.getPlayer();
    let card   = helper.getTopCard();

    return `It's clear to everyone at the table that ${player} has the ${card}.`;
}

function p() {
    let player   = helper.getPlayer();
    let card     = helper.getTopCard();
    let creature = helper.getTopCreature();

    return `${player}'s hands shook uncontrollably as he held his two of his combo pieces - ${card} and ${creature}.`;
}

function q() {
    let player  = helper.getPlayer();
    let sorcery = helper.getTopSorcery();
    let instant = helper.getTopInstant();

    return `Carefull not to tap out, ${player} casts ${sorcery} with ${instant} backup.`;
}

function r() {
    let players = funct.getPlayerArray(2);
    let instant = helper.getTopInstant();

    return `After looking at the top card of ${players[0]}'s library, ${players[1]} decided to leave ${instant} right where it was`;
}

function s() {
    let players  = funct.getPlayerArray(4);
    let instants = funct.getInstantArray(3);
    let sorcery  = helper.getTopSorcery();

    return `The stack is ${players[0]}'s ${instants[0]} and ${players[1]}'s ${instants[1]} repsonding to ${players[2]}'s ${sorcery}. ${players[3]} clutches his ${instants[2]}, wondering if now is the time.`
}

function t() {
    let players  = funct.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let card     = helper.getTopCard();

    return `${players[0]} nearly punted the game for failing to read the text on ${players[1]}'s ${creature}. ${card} should help him stabilize.`;
}

function u() {
    let players      = funct.getPlayerArray(2);
    let enchantments = funct.getEnchantmentArray(2);
    let creature     = helper.getTopCreature();

    return `${players[0]}'s board is ${enchantments[0]} and ${creature}. ${players[1]} is holding a copy of ${enchantments[1]}. We are at a standstill.`
}

function v() {
    let players     = funct.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let spell       = helper.getTopInstant();

    return `${players[0]} notices ${players[1]} missed the trigger on his ${enchantment}. A copy of ${spell} will be huge later.`;
}

function w() {
    let spell   = helper.getTopInstant();
    let players = funct.getPlayerArray(2);
    let lands   = funct.getLandArray(2);
    let card    = helper.getTopCreature();

    return `${spell} is put on to the stack. ${players[0]} asks ${players[1]} if he has a response. ${players[1]}'s hand is ${lands[0]}, ${card}, and ${lands[1]}.`;
}

async function x() {
    let players = funct.getPlayerArray(2);
    let general = await funct.getRandomGeneral();
    let card    = helper.getTopSorcery();

    return `${players[0]} is excited about his brand new ${general} deck. He'll be less so when ${players[1]} shows him ${card}.`;
}

function y() {
    let player   = helper.getPlayer();
    let spell    = helper.getTopEnchantment();
    let creature = helper.getTopCreature();

    return `The playgroup pitched in and got ${player} a copy of ${spell}. Should pair well with his ${creature}.`;
}

function z() {
    let players = funct.getPlayerArray(3);
    let card    = helper.getTopSorcery();

    return `${players[0]} and ${players[1]} complain about causual gameplay as ${players[2]} untaps and jams ${card}.`;
}
/* -- Random Sentence Generator --
We want to load our unique sentence functions 
into an array and then select an index and random
and fill the mad-lib variables at run time. When
defining a new sentence, make sure it's included 
in the array below
*/
function getSentence() {
    let functArray = [
        a, b, c,
        d, e, f,
        g, h, i,
        j, k, l,
        m, n, o,
        p, q, r,
        s, t, u,
        v, w, x,
        y, z
    ];

    functArray = helper.arrayShuffle(functArray);
    return helper.indexShuffle(functArray)();
}

//Expose the only function that executes 
module.exports = { getSentence };