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
	thingsToLoad.push('assets/stage_placeholder.png');

	let h = hexi(1080, 1080, setup, thingsToLoad, load);
	h.fps = 30;
	h.scaleToWindow();
	h.start();

	function load() {
		//Display the file currently being loaded
		console.log(`loading: ${h.loadingFile}`);

		//Display the percentage of files currently loaded
		console.log(`progress: ${h.loadingProgress}`);
	}
	let stage = new Stage(h);

	function setup() {
		let ui = new UI(h);
		let stage = new Stage(h);
		h.state = play;
	}

	function play() {

	}
}
