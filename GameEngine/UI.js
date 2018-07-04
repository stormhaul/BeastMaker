"use strict";

/**
 * Dependencies
 *
 */

function UI(h) {

	h.pointer.tap = () => {

		//Probably going to hard code element locations and logic for now
		//I'm not sure how I want to handle that or how UI's can be created in hexi yet
		console.log(h.pointer.x, h.pointer.y)
	}
}
