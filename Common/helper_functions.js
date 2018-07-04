"use strict";

function calculateDistance (position1, position2) {
	return Math.sqrt(Math.pow(position1.x + position2.x, 2) + Math.pow(position1.y + position2.y, 2));
}
