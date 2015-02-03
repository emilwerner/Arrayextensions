
describe("Take is implemented correctly", function() {
	it("Take exists", function() {
		expect([].take).toBeDefined();
	});

	it("Take on empty array returns empty array", function() {
		expect([].take(10).length).toEqual(0);
	});

	it("Take without argument throws error", function() {
		expect([].take).toThrow(new Error("Argument for Take is required"));
	});

	it("Take on array returns corrent number of elements", function() {
		expect([1,2,3,4,5,6,7,8,9,10].take(5).length).toEqual(5);
		expect([1,2,3,4,5,6,7,8].take(4).length).toEqual(4);
		expect([1,2].take(2).length).toEqual(2);
	});

	it("Take with too few elements returns correct number of elements", function() {
		expect([1,2].take(5).length).toEqual(2);
		expect([1,2,3,4,5,6,7,8].take(20).length).toEqual(8);
	});
});