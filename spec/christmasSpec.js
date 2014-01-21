describe("The Christmas Tree", function(){

	it("Devrait avoir n+1 lignes (nombre demandé + le tronc)", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		expect(treeLines.length).toBe(11);
	});

	it("Devrait avoir un tronc", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		var trunc = treeLines[treeLines.length-1];
		expect(trunc).toContain("|_|");
	});

	it("La première ligne doit avoir 1 seul étoile", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		var firstLine = treeLines[0];
		expect(firstLine.split("*").length-1).toBe(1);
	});


	it("La 4eme ligne doit avoir 4 étoiles", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		var firstLine = treeLines[3];
		expect(firstLine.split("*").length-1).toBe(4);
	});

	it("La 5eme ligne doit avoir 3 étoiles", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		var firstLine = treeLines[4];
		expect(firstLine.split("*").length-1).toBe(3);
	})
})