const helper = require("./helpers")
    , funct  = require("./functions");
/**
 * Sentence functions
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
    let sorcery = helper.getTopSorcery();

    return `During ${players[0]}'s ${phase}, ${players[1]} attempts an instant speed ${sorcery}.`;
}

function c() {
    let player  = helper.getPlayer();
    let instant = helper.getTopInstant();

    return `Moving to his second main phase, ${player} tanks and jams ${instant}.`;
}

function d() {
    let player      = helper.getPlayer();
    let instant     = helper.getTopInstant();
    let creature    = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${instant} up to protect his ${enchantment}.`;
}

function e() {
    let player = helper.getPlayer();

    return `I'm sorry ${player}, did you read the card?`;
}

async function f() {
    let player = helper.getPlayer();
    let card   = await funct.getCardArray(1);
    let lands  = funct.getLandArray(2);
    let cards  = funct.getTopCardArray(2);

    return `${player} mulled to a hand of ${lands[0]}, ${card[0]}, ${cards[0]}, ${lands[1]}, and ${cards[1]}.`;
}

function g() {
    let players = funct.getPlayerArray(2);
    let card    = helper.getTopCard();
    let instant = helper.getTopInstant();

    return `At a critical juncture, ${players[0]} attempts to resolve ${card}. ${players[1]} snap responds with ${instant}.`;
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
    let insant      = helper.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${insant}.`;
}

function j() {
    let player = helper.getPlayer();

    let decisions = ["decides", "declines", "forgets", "wants", "encourages others"];
    let decision  = helper.shuffle(decisions);

    return `${player} ${decision} to pay for Smothering Tithe.`;
}

function k() { 
    let player = helper.getPlayer();
    let card   = helper.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

function l() {
    let player      = helper.getPlayer();
    let sorcery     = helper.getTopSorcery();
    let enchantment = helper.getTopEnchantment();

    let mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return `It's a toss up between ${sorcery} and ${enchantment}, so ${player} spends ${mins} minutes tutoring.`;
}

async function m() {
    let player = helper.getPlayer();
    let cards = await funct.getCardArray(2);
    let land  = helper.getTopLands();

    return `After activating Top - ${player} puts ${cards[0]}, ${land}, and ${cards[1]} back in the exact order he found them in.`;
}

function n() {
    let players = funct.getPlayerArray(2);
    let sorcery = helper.getTopSorcery();

    return `${players[0]}'s crucial, game winning ${sorcery} is put on the stack. ${players[1]} is already shuffling for the next game`;
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

    return `The stack is ${players[0]}'s ${instants[0]} and ${players[1]}'s ${instants[1]} responding to ${players[2]}'s ${sorcery}. ${players[3]} clutches his ${instants[2]}, wondering if now is the time.`
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
    let insant      = helper.getTopInstant();

    return `${players[0]} notices ${players[1]} forgot about the text on his ${enchantment}. A copy of ${insant} will be huge later.`;
}

function w() {
    let insant  = helper.getTopInstant();
    let players = funct.getPlayerArray(2);
    let lands   = funct.getLandArray(2);
    let card    = helper.getTopCreature();

    return `${insant} is put on to the stack. ${players[0]} asks ${players[1]} if he has a response. ${players[1]}'s hand is ${lands[0]}, ${card}, and ${lands[1]}.`;
}

async function x() {
    let players = funct.getPlayerArray(2);
    let general = await funct.getRandomGeneral();
    let sorcery = helper.getTopSorcery();

    return `${players[0]} is excited about his brand new ${general} deck. He'll be less so when ${players[1]} shows him ${sorcery}.`;
}

function y() {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let creature    = helper.getTopCreature();

    return `The playgroup pitched in and got ${player} a copy of ${enchantment} - which should pair well with his ${creature}.`;
}

function z() {
    let players = funct.getPlayerArray(3);
    let sorcery = helper.getTopSorcery();
    let complaints = ["casual gameplay", "the board state", "Niv-Mizzet", "missed land drops", "Winter Orb", "Elspeth"];
    let complaint = helper.shuffle(complaints);

    return `${players[0]} and ${players[1]} complain about ${complaint} as ${players[2]} untaps and jams ${sorcery}.`;
}

function aa() {
	let players = funct.getPlayerArray(2);

	return `${players[0]} scrys a handful of cards during ${players[1]}'s turn and decides to scoop it up`;
}
/**
 * Sentence generator
 */
let functArray = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, 
    n, o, p, q, r, s, t, u, v, w, x, y, z,
    aa
];

function getSentence() { return helper.shuffle(functArray)(); }

module.exports = { getSentence, functArray };
