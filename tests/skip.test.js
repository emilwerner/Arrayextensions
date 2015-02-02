
describe("Skip is implemented correctly", function() {
	it("Skip exists", function() {
		expect([].skip).toBeDefined();
	});

	it("skip on empty array returns empty array", function() {
		expect([].skip(10).length).toEqual(0);
	});


	it("skip on array returns corrent number of elements", function() {
		expect([1,2,3,4,5,6,7,8,9,10].skip(5).length).toEqual(5);
		expect([1,2,3,4,5,6,7,8].skip(4).length).toEqual(4);
		expect([1,2].skip(2).length).toEqual(0);
	});

	it("Skip on array with less elements than argument returns empty array", function() {
		expect([1,2].skip(25).length).toEqual(0);
		expect([1,2,3,4,5].skip(37).length).toEqual(0);
		expect([1].skip(37).length).toEqual(0);
	});
});