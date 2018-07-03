"use strict";

/**
 * Dependencies
 * Beastiary
 * Card
 */

/**
 * This is an edged graph that will determine which cards are available and what
 * transformation paths exist, I will probably add graph information like min and max edges
 * or other parameters to affect the construction
 */
function MonsterMap(num_nodes = 49, min_edges = 1, max_edges = 7) {
	this.nodes = [];

	this.beastiary = new Beastiary();

	//shuffle function
	this.shuffle = function(a) {
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
        	j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	    return a;
	}

	let shuffed_beasts = this.shuffle(this.beastiary.monsters);

	//add number of nodes to the map representing selected monsters
	let i = 0;
	while(this.nodes.length < num_nodes && this.nodes.length < this.beastiary.monsters.length) {
		this.nodes.push({monster: shuffed_beasts[i++], edges: []});
	}

	//in order to ensure that all nodes are connected we will add connections
	//as we loop through the nodes.
	let cur = null;
	for (i in this.nodes) {
		let prev_id = i-1;
		cur = this.nodes[i];
		if (prev_id >= 0) {
			let prev = this.nodes[prev_id];
			cur.edges.push(prev_id);
			prev.edges.push(parseInt(i));
		}
	}
	//add last and first nodes to each other
	cur.edges.push(0);
	this.nodes[0].push(parseInt(i));
	
	//haven't decided how we want to handle connection distributution
}
