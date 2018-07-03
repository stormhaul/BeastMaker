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

	//here we will put special attributes added by specials such as range and dodge and bleed

	//here we will put status effect variables

	this.generate = function(slots) {
		//loop through the slots and update this beasts statistics accordingly
	}

	//here we need to add funcitons that all beasts will need to use such as attack and move
	//we will also add our ai logic here, but unsure what interface we will use to gain info for the beast
	
	//we will need an end of turn function which will process and update status effects, as well as re examine the enemy
	//examination of the enemy will take into account intelligence, as well as how frightened of the enemy the beast is
	//and how frightened the enemy seems of it. If at any point the fear of the enemy overpowers the beast's will it might run or even submit
}
