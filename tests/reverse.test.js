
describe("Reverse is implemented correctly", function() {
	it("Reverse exists", function() {
		expect([].reverse).toBeDefined();
	});

	it("Take on empty array returns empty array", function() {
		expect([].reverse()).toEqual([]);
	});

	it("Reverse revereses arrays", function() {
		expect([1,2,3].reverse()).toEqual([3,2,1]);
		expect([3,2,1].reverse()).toEqual([1,2,3]);
		expect(["a","b","c"].reverse()).toEqual(["c","b","a"]);
		expect(["c","b", "a"].reverse()).toEqual(["a","b","c"]);
	});
});