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

	//generates a completely connected graph
	this.addEdges = function(nodes) {
		let cur = null;
		for (i in nodes) {
			let prev = cur;
			cur = nodes[i];
			if (prev !== null && prev.edges.length < max_edges && cur.edges.length < max_edges) {
				cur.edges.push(prev.id);
				prev.edges.push(cur.id);
			}
		}
		return nodes;
	}

	//adds connects to a graph in a semi-random fashion up to the maximum
	this.addRandomEdges = function(nodes) {
		for (i in nodes) {
			let cur = nodes[i];
			let cur_max_edges = Math.floor(Math.random() * (max_edges - cur.edges.length)) + cur.edges.length;
			for (var j = cur.edges.length; j < cur_max_edges; j++) {
				let selected_node = Math.floor(Math.random() * nodes.length);
				if (selected_node != cur.id && !cur.edges.includes(selected_node) && nodes[selected_node].edges.length < max_edges) {
					cur.edges.push(selected_node);
					nodes[selected_node].edges.push(cur.id);
				}
			}
		}
		return nodes;
	}

	let shuffed_beasts = this.shuffle(this.beastiary.monsters);

	//add number of nodes to the map representing selected monsters
	let i = 0;
	while(this.nodes.length < num_nodes && this.nodes.length < this.beastiary.monsters.length) {
		this.nodes.push({id: i, monster: shuffed_beasts[i++], edges: []});
	}

	//in order to ensure that all nodes are connected we will add connections
	//as we loop through the nodes.
	this.nodes = this.addEdges(this.nodes);

	//decided to do randomized number of connection to randomized nodes, not keep exactly max if possible
	this.nodes = this.addRandomEdges(this.nodes);
}
