describe("The Christmas Tree", function(){

	it("Devrait avoir n+1 lignes (nombre demandé + le tronc)", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		expect(treeLines.length).toBe(11);
	});
})