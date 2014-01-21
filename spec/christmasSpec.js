describe("christmas Tree", function(){

	it("Devrait avoir un nombre de ligne égal au nombre demandé", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		expect(treeLines.length).toBe(10);
	})

})