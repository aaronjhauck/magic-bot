const helper = require("./helpers")
    , utils  = require("./utils");

//#region Sentence functions
const a = async() => {
    let general = await helper.getRandomGeneral();
    let card    = helper.getTopCard();
    let player  = helper.getPlayer();

    return `${player} snuck a copy of ${card} into his ${general} deck.`;
}

const b = () => {
    let players = helper.getPlayerArray(2);
    let phase   = helper.getInstantPhase();
    let sorcery = helper.getTopSorcery();

    return `During ${players[0]}'s ${phase}, ${players[1]} attempts an instant speed ${sorcery}.`;
}

const c = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();

    return `Moving to his second main phase, ${player} tanks and jams ${saltyCard}.`;
}

const d = () => {
    let player      = helper.getPlayer();
    let instant     = helper.getTopInstant();
    let creature    = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${instant} up to protect his ${enchantment}.`;
}

const e = () => {
    let player = helper.getPlayer();

    return `I'm sorry ${player}, did you read the card?`;
}

const f = async() => {
    let player = helper.getPlayer();
    let card   = await helper.getCardArray(1);
    let lands  = helper.getLandArray(2);
    let cards  = helper.getTopCardArray(2);

    return `${player} mulled to a hand of ${lands[0]}, ${card[0]}, ${cards[0]}, ${lands[1]}, and ${cards[1]}.`;
}

const g = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let instant   = helper.getTopInstant();

    return `At a critical juncture, ${players[0]} attempts to resolve ${saltyCard}. ${players[1]} snap responds with ${instant}.`;
}

const h = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let creature  = helper.getTopCreature();
    let reaction  = helper.getReaction();

    return `Victory is close. With ${saltyCard} in hand, ${players[0]} slams ${creature}. ${players[1]} ${reaction}.`;
}

const i = () => {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let instant      = helper.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${instant}.`;
}

const j = () => {
    let player = helper.getPlayer();

    let decision  = utils.shuffle([
        "decides", 
        "declines", 
        "forgets", 
        "wants", 
        "encourages others"
    ]);

    return `${player} ${decision} to pay for Smothering Tithe.`;
}

const k = () => { 
    let player = helper.getPlayer();
    let card   = helper.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

const l = () => {
    let player      = helper.getPlayer();
    let saltyCard   = helper.getSaltyCard();
    let enchantment = helper.getTopEnchantment();

    let mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return `It's a toss up between ${saltyCard} and ${enchantment}, so ${player} spends ${mins} minutes tutoring.`;
}

const m = async() => {
    let player = helper.getPlayer();
    let cards  = await helper.getCardArray(2);
    let land   = helper.getTopLands();

    return `After activating Top - ${player} puts ${cards[0]}, ${land}, and ${cards[1]} back in the exact order he found them in.`;
}

const n = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();

    return `${players[0]}'s crucial, game winning ${saltyCard} is put on the stack. ${players[1]} is already shuffling for the next game`;
}

const o = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();

    return `It's clear to everyone at the table that ${player} has the ${saltyCard}.`;
}

const p = () => {
    let player   = helper.getPlayer();
    let card     = helper.getTopCard();
    let creature = helper.getTopCreature();

    return `${player}'s hands shook uncontrollably as he held his two of his combo pieces - ${card} and ${creature}.`;
}

const q = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();
    let instant   = helper.getTopInstant();

    return `Careful not to tap out, ${player} casts ${saltyCard} with ${instant} backup.`;
}

const r = () => {
    let players = helper.getPlayerArray(2);
    let instant = helper.getTopInstant();

    return `After looking at the top card of ${players[0]}'s library, ${players[1]} decided to leave ${instant} right where it was`;
}

const s = () => {
    let players  = helper.getPlayerArray(4);
    let instants = helper.getInstantArray(3);
    let sorcery  = helper.getTopSorcery();

    return `The stack is ${players[0]}'s ${instants[0]} and ${players[1]}'s ${instants[1]} responding to ${players[2]}'s ${sorcery}. ${players[3]} clutches his ${instants[2]}, wondering if now is the time.`
}

const t = () => {
    let players  = helper.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let card     = helper.getTopCard();

    return `${players[0]} nearly punted the game for failing to read the text on ${players[1]}'s ${creature}. ${card} should help him stabilize.`;
}

const u = () => {
    let players      = helper.getPlayerArray(2);
    let enchantments = helper.getEnchantmentArray(2);
    let creature     = helper.getTopCreature();

    return `${players[0]}'s board is ${enchantments[0]} and ${creature}. ${players[1]} is holding a copy of ${enchantments[1]}. We are at a standstill.`
}

const v = () => {
    let players     = helper.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let instant      = helper.getTopInstant();

    return `${players[0]} notices ${players[1]} forgot about the text on his ${enchantment}. A copy of ${instant} will be huge later.`;
}

const w = () => {
    let instant   = helper.getTopInstant();
    let players  = helper.getPlayerArray(2);
    let lands    = helper.getLandArray(2);
    let creature = helper.getTopCreature();

    return `${instant} is put on to the stack. ${players[0]} asks ${players[1]} if he has a response. ${players[1]}'s hand is ${lands[0]}, ${creature}, and ${lands[1]}.`;
}

const x = async() => {
    let players = helper.getPlayerArray(2);
    let general = await helper.getRandomGeneral();
    let sorcery = helper.getTopSorcery();

    return `${players[0]} is excited about his brand new ${general} deck. He'll be less so when ${players[1]} shows him ${sorcery}.`;
}

const y = () => {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let creature    = helper.getTopCreature();

    return `The playgroup pitched in and got ${player} a copy of ${enchantment} - which should pair well with his ${creature}.`;
}

const z = () => {
    let players = helper.getPlayerArray(3);
    let sorcery = helper.getTopSorcery();
    let complaint = utils.shuffle([
        "casual gameplay", 
        "the board state", 
        "Niv-Mizzet", 
        "missed land drops", 
        "Winter Orb", 
        "Elspeth"
    ]);

    return `${players[0]} and ${players[1]} complain about ${complaint} as ${players[2]} untaps and jams ${sorcery}.`;
}

const aa = () => {
	let players = helper.getPlayerArray(2);

	return `${players[0]} scrys a handful of cards during ${players[1]}'s turn and decides to scoop it up`;
}

const a1 = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let card      = helper.getTopCard();

    return `${players[0]} thinks it's pretty unfair ${players[1]} runs a ${card}. Ironic coming from a guy playing ${saltyCard}.`;
}

const b1 = () => {
    let players = helper.getPlayerArray(2);
    let phase   = helper.getInstantPhase();
    let land    = helper.getTopLands();

    return `${players[0]} decides ${players[1]}'s ${phase} is the optimal time to fetch up a ${land}.`;
}

const c1 = () => {
    let players = helper.getPlayerArray(1);
    let artifact = helper.getTopArtifact();

    return `No, ${players[0]} - we can't rewind because you forgot to activate your ${artifact}.`;
}

const d1 = () => {
    let players = helper.getPlayerArray(1);

    return `${players[0]} plays with his lands at the top of his playmat.`
}

const e1 = () => {
    let players  = helper.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let instant  = helper.getTopInstant();

    return `${players[0]} should have waited on his ${creature}. ${players[1]} was practically telegraphing the ${instant}.`
}

const f1 = () => {
    let players = helper.getPlayerArray(1);
    let sorcery = helper.getTopSorcery();

    return `Sorry ${players[0]}, ${sorcery} won't save you this time.`
}

const g1 = () => {
    let players = helper.getPlayerArray(2);
    let creatures = helper.getCreatureArray(2);

    return `In careless combat, ${players[0]} swings ${creatures[0]} into ${players[1]}'s ${creatures[1]}.`;
}

const h1 = () => {
    let players = helper.getPlayerArray(2);
    let creatures = helper.getCreatureArray(1);

    return `No spells will resolve if ${players[0]} has anything to say about it. Looks like ${players[1]} is on the ${creatures[0]} beat down plan.`;
}

const i1 = () => {
    let players     = helper.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let card        = helper.getSaltyCard();

    return `Still unsure what ${players[0]}'s ${enchantment} does, ${players[1]} assumes his ${card} will handle it.`;
}

const j1 = () => {
    let land = helper.getTopLands();
    let players = helper.getPlayerArray(1);

    return `"${land}, tapped. Pass.", exclaims ${players[0]}.`;
}

const k1 = () => {
    let players = helper.getPlayerArray(1);
    let creature = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Fully tilted, ${players[0]} puts ${creature} and ${enchantment} on the board at the same time - paying for each after he cast them.`;
}

const l1 = () => {
    let players = helper.getPlayerArray(1);

    return `${players[0]} is absolutely in the tank.`;
}

const m1 = () => {
    let players = helper.getPlayerArray(1);
    let salt    = helper.getSaltyCard();

    return `It was a long road, but ${salt} finally brought ${players[0]} kicking and screaming across the finish line.`;
}

const n1 = () => {
    let card = utils.shuffle([
        'Pyroblast', 
        'Hydroblast', 
        'Veil', 
        'a Lily plus', 
        'the Dack minus'
    ]);

    let reaction = utils.shuffle([
        'a real beating', 
        'a bit overkill', 
        'a little late', 
        'pretty irrelevant'
    ]);

    return `Actually ${card} is ${reaction} here.`;
}
//#region Sentence functions

//#region Sentence generator
let functArray = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, 
    n, o, p, q, r, s, t, u, v, w, x, y, z,
    aa, a1, b1, c1, d1, e1, f1, g1, h1, i1,
    j1, k1, l1, m1, n1
];
module.exports.getSentence = () => { return utils.shuffle(functArray)(); }
//#endregion Sentence generator