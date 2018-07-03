"use strict";

/**
 * Dependencies
 *
 */

function Main() {
	let b = new Board();
	console.log(b);
	
	let thingsToLoad = [];
	for (var i in b.monsterMap.nodes) {
		let cur = b.monsterMap.nodes[i];
		thingsToLoad.push(cur.monster.img);
	}
	
	let h = hexi(512, 512, setup, thingsToLoad, load);
	h.fps = 30;
	h.scaleToWindow();
	h.start();
	
	function load() {
		//Display the file currently being loaded
		console.log(`loading: ${g.loadingFile}`);

		//Display the percentage of files currently loaded
		console.log(`progress: ${g.loadingProgress}`);
	}
	
	function setup() {
		h.state = play;
	}
}
