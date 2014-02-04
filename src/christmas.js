
function drawTree (treeSize) {
	if (treeSize <= 3) {
		throw new Error("La taille est inférieure à 3");
	};
	var tree = "";
	var touteLesQuatreLignes = 0;
	for (var i = 0; i < treeSize; i++) {
		if (i > 0 && (i % 4) == 0) touteLesQuatreLignes+=2;
		var branche="";
		for (var j = 0; j <= i - touteLesQuatreLignes; j++) {
			branche+="* ";
		}
		tree+=branche.trim()+"\n";

	}
	tree+="||";
	console.log(tree);
	return tree;
}