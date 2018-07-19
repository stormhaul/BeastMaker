"use strict";

/**
 * Dependencies
 * Data file undetermined
 */

/**
 * Essentially this class will be the pool of all monsters with their information
 */
function Beastiary(file_path = null){
	this.monsters = [];
	if (file_path != null) {
		//load file's beastiary
	} else {
		//load default beastiary
		this.monsters = [
			{
				"name": "Demon Toad",
				"img": " http://2.bp.blogspot.com/_ecEE8kNDzl0/S7Ykikh_s8I/AAAAAAAAALc/88QU7UgoFYw/s1600/Demon_Toad.jpg",
				"description": "This toad is much larger than a normal man with extremely thick skin and a ghastly appearance. To kill it's enemies it can either gobble them whole and let it's acidic interior melt them slowly, or leap high into the air to land on them and crush them."
			},
			{
				"name": "Verpine Soldier",
				"img": "nope.jpg",
				"description": "This insect will keep fighting even after being dismembered. Nothing short of death will stop it from defending it's home from invaders. It strong for its size but primarily relies on swarming to kill it's foes."
			},
			{
				"name": "Test Creature 3",
				"img": "test3.jpg",
				"description": "description"
			},
			{
				"name": "Test Creature 4",
				"img": "test4.jpg",
				"description": "description"
			},
			{
				"name": "Test Creature 5",
				"img": "test5.jpg",
				"description": "description"
			},
			{
				"name": "Test Creature 6",
				"img": "test6.jpg",
				"description": "description"
			},
			{
				"name": "Test Creature 7",
				"img": "test7.jpg",
				"description": "description"
			},
			{
				"name": "Test Creature 8",
				"img": "test8.jpg",
				"description": "description"
			}
		]

	}
}
