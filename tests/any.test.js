
describe("Any is implemented correctly", function() {
	it("Any exists", function() {
		expect([].any).toBeDefined();
	});

	it("Any on empty array returns false", function() {
		expect([].any()).toEqual(false);
	});

	it("Any on non-empty array returns false", function() {
		expect([1,2,3].any()).toEqual(true);
	});

	it("Any with func on empty array returns false", function() {
		expect([].any(function(item){
			return item === 1;
		})).toEqual(false);
	});


	it("Any with func on non-empty array returns false", function() {
		expect([1,2,3,4,5].any(function(item){
			return item === 1;
		})).toEqual(true);
	});

	it("Any works with complex objects", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Marko", age: 17}];

		expect(personArray.any(function(item){
			return item.name === "Emil";
		})).toEqual(true);

		expect(personArray.any(function(item){
			return item.name === "Kalle";
		})).toEqual(false);
	});

});