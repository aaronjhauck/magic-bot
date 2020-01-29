var helper = require("./helpers");
var funct  = require("./functions");
/*
-- Sentence Functions --
There is probably a much better way of doing this, but 
for now - this implementation is fine. We want to generate 
a new random variable every time the function is called. To add a 
new sentence, define the function as a letter and add  it to the 
getSentence() method at the bottom of this file
*/
async function a() {
    var general = await funct.getRandomGeneral();
    var card    = helper.getTopCard();
    var player  = helper.getPlayer();

    return `${player} snuck a copy of ${card} into his ${general} deck.`;
}

function b() {
    var players = funct.getPlayerArray(2);
    var phase   = helper.getInstantPhase();
    var spell   = helper.getTopSorcery();

    return `During ${players[0]}'s ${phase}, ${players[1]} attempts an instant speed ${spell}.`;
}

function c() {
    var player = helper.getPlayer();
    var spell  = helper.getTopInstant();

    return `Moving to his second main phase, ${player} tanks and jams ${spell}.`;
}

function d() {
    var player      = helper.getPlayer();
    var card        = helper.getTopInstant();
    var creature    = helper.getTopCreature();
    var enchantment = helper.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${card} up to protect his ${enchantment}.`;
}

function e() {
    var player = helper.getPlayer();

    return `Hey ${player} - did you read the card?`;
}

async function f() {
    var player = helper.getPlayer();

    var a = helper.getTopLands();
    var b = await getRandomCard();
    var c = helper.getTopCard();
    var d = helper.getTopLands();
    var e = helper.getTopCard();

    return `${player} mulled to a hand of ${a}, ${b}, ${c}, ${d}, and ${e}.`;
}

function g() {
    var players = funct.getPlayerArray(2);
    var card    = helper.getTopCard();
    var spell   = helper.getTopInstant();

    return `At a critical juncture, ${players[0]} attempts to resolve ${card}. ${players[1]} snap responds with ${spell}.`;
}

function h() {
    var players  = funct.getPlayerArray(2);
    var card     = helper.getTopCard();
    var creature = helper.getTopCreature();
    var reaction = helper.getReaction();

    return `Victory is close. With ${card} in hand, ${players[0]} slams ${creature}. ${players[1]} ${reaction}.`;
}

function i() {
    var player      = helper.getPlayer();
    var enchantment = helper.getTopEnchantment();
    var spell       = helper.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${spell}.`;
}

function j() {
    var player = helper.getPlayer();

    return `${player} declines to pay (2) for Smothering Tithe.`;
}

function k() { 
    var player = helper.getPlayer();
    var card   = helper.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

function l() {
    var player      = helper.getPlayer();
    var spell       = helper.getTopSorcery();
    var enchantment = helper.getTopEnchantment();

    var mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return `It's a toss up between ${spell} and ${enchantment}, so ${player} spends ${mins} minutes tutoring.`;
}

async function m() {
    var player = helper.getPlayer();
    var cards = await funct.getCardArray(2);
    var land  = helper.getTopLands();

    return `After activating Top - ${player} puts ${cards[2]}, ${land}, and ${cards[1]} back in the exact order he found them in.`;
}

function n() {
    var players = funct.getPlayerArray(2);
    var spell = helper.getTopSorcery();

    return `${players[0]}'s crucial, game winning ${spell} is put on the stack. ${players[1]} is already shuffling for the next game`;
}

function o() {
    var player = helper.getPlayer();
    var card   = helper.getTopCard();

    return `It's clear to everyone at the table that ${player} has the ${card}.`;
}

function p() {
    var player   = helper.getPlayer();
    var card     = helper.getTopCard();
    var creature = helper.getTopCreature();

    return `${player}'s hands shook uncontrollably as he held his two of his combo pieces - ${card} and ${creature}.`;
}

function q() {
    var player  = helper.getPlayer();
    var sorcery = helper.getTopSorcery();
    var instant = helper.getTopInstant();

    return `Carefull not to tap out, ${player} casts ${sorcery} with ${instant} backup.`;
}

function r() {
    var players = funct.getPlayerArray(2);
    var instant = helper.getTopInstant();

    return `After looking at the top card of ${players[0]}'s library, ${players[1]} decided to leave ${instant} right where it was`;
}

function s() {
    var players  = funct.getPlayerArray(4);
    var instants = funct.getInstantArray(3);
    var sorcery  = helper.getTopSorcery();

    return `The stack is ${players[0]}'s ${instants[0]} and ${players[1]}'s ${instants[1]} repsonding to ${players[2]}'s ${sorcery}. ${players[3]} clutches his ${instants[2]}, wondering if now is the time.`
}

function t() {
    var players  = funct.getPlayerArray(2);
    var creature = helper.getTopCreature();
    var card     = helper.getTopCard();

    return `${players[0]} nearly punted the game for failing to read the text on ${players[1]}'s ${creature}. ${card} should help him stabilize.`;
}
/* -- Random Sentence Generator --
We want to load our unique sentence functions 
into an array and then select an index and random
and fill the mad-lib variables at run time. When
defining a new sentence, make sure it's included 
in the array below
*/
function getSentence() {
    var arry_of_functions = [
        a, b, c,
        d, e, f,
        g, h, i,
        j, k, l,
        m, n, o,
        p, q, r,
        s,t
    ];

    var pos = Math.floor(Math.random()*arry_of_functions.length);

    return arry_of_functions[pos]();
}

//Expose the only function that executes 
module.exports = { getSentence };