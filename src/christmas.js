
function drawTree (treeSize) {
	var tree = "";
	for (var line=0; line<treeSize; line++){
		tree+="*";
		var numberOfStars = line-Math.floor(line/4)*2;
		for (var star=0;star<numberOfStars;star++){
			tree+=" *";
		}
		tree += "\n";
	}
	tree += "|_|";
	return tree;
}