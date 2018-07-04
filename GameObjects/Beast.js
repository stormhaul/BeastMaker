"use strict";

/**
 * Dependencies:
 *
 */

/**
 * a beast is a collection of statistics based on the creatures played in stat slots
 *
 * Strength
 * Endurance
 * Toughness
 * Speed
 * Intelligence
 * Special
 * Willpower
 */
function Beast(str, end, tough, spd, int, spc, will) {
	//attributes
	this.attributes = {
		str: str,
		end: end,
		tough: tough,
		spd: spd,
		int: int,
		spc: spc,
		will: will,
	};
	this.position = {x: 0, y: 0};

	//here we will put special attributes added by specials such as range and dodge and bleed
	//ranged attacks section
	this.attack_range = 1;
	this.is_ranged = false;

	//bleed secition
	this.bleed_duration = 0;
	this.bleed_amount = 0;

	//dodge
	this.melee_dodge = 0;
	this.range_dodge = 0;

	//speed modifiers
	this.bonus_speed = 0;

	//movement type modifiers


	//here we will put status effect variables

	this.generate = function(slots) {
		//loop through the slots and update this beasts statistics accordingly
	}

	//here we need to add funcitons that all beasts will need to use such as attack and move
	//we will also add our ai logic here, but unsure what interface we will use to gain info for the beast
	this.move = function(position) {
		this.postion = position;
	}
	this.moveEnemy = function(position) {
		this.enemy_position = position;
	}

	//attack function actually deals the damage to the enemy and checks if successfully hit need to determine
	//damage types, and how we want to handle damage reduction/hit chances
	this.attack = function(target_beast) {
		if (calculateDistance(this.position, target_beast.position) <= this.attack_range) {

		}
	}
	this.reduceHealth = function(amount) {

	}

	//we will need an end of turn function which will process and update status effects, as well as re examine the enemy
	//examination of the enemy will take into account intelligence, as well as how frightened of the enemy the beast is
	//and how frightened the enemy seems of it. If at any point the fear of the enemy overpowers the beast's will it might run or even submit
}
