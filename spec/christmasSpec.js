describe("The Christmas Tree", function(){

	it("Devrait avoir n+1 lignes (nombre demandé + le tronc)", function(){
		var tree = drawTree(10);
		var treeLines = tree.split('\n');
		expect(treeLines.length).toBe(11);
	});

	it("Le paramètre d'entrée doit être supérieur à 3", function(){
		var smallTree = function() {
			drawTree(2);
		}
		var bigTree = function() {
			drawTree(5);
		}
		expect(smallTree).toThrow();
		expect(bigTree).not.toThrow();
	});

	it("Devrait avoir chaque ligne avec X etoiles, separées par un espace", function (){
		var tree = drawTree(10);
		tree.split("\n").forEach(function (line, lineIdx) {
			var nbEtoilesATester = lineIdx + 1;
			if (lineIdx == 10) return; // LE TRONC !!!
			var result = line.split("*"); // LES BRANCHES !!!
			for (var i = 1; i < result.length - 1; i++) {
				var supposedSpace = result[i];
				expect(supposedSpace).toBe(" ");
			};
			expect(result.length).toBeGreaterThan(0);
		});
	});


	it("Toutes les 4 lignes, le nombre d'étoiles est réduit d'un", function(){
		var tree = drawTree(5);
		var ligne4=tree.split("\n")[4];
		var comptage = ligne4.match(/\*/g).length;
		expect(comptage).toBe(3);
	});
})