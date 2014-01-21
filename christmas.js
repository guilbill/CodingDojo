
function drawTree (treeSize) {
	var tree = "    *    \n";
	tree += 	 "   * *   \n";
	tree += 	 "  * * *  \n";
	tree += 	 " * * * * \n";
	tree += 	 "   |_|   \n";
	return tree;
}

$(document).ready(function(){
	$("#compute-tree").click(function(){
		var size = parseInt($("#tree-size").val());
		$("#christmas-tree").append(drawTree(size));
	});
});