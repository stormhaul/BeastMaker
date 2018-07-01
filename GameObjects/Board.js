"use strict";

/**
 * Dependencies:
 * MonsterMap
 * Player
 */
function Board() {
	this.monsterMap = new MonsterMap();
	this.deck = {};

	this.player1 = new Player();
	this.player2 = new Player();
}
