
describe("first is implemented correctly", function() {
	it("First exists", function() {
		expect([].first).toBeDefined();
	});

	it("First on empty array returns undefined", function() {
		expect([].first()).toBeUndefined();
	});


	it("First without parameter returns index 0", function() {
		expect([1,2,3,4,5].first()).toEqual(1);
		expect([2,3,4,5].first()).toEqual(2);
		expect([13].first()).toEqual(13);
	});

	it("First number above 15", function() {
		expect([12,23,36,41,59].first(function(number){
			return number > 15;
		})).toEqual(23);
	});

	it("First string containing 'tj'", function() {
		var first = ["hej", "hejsan", "hej hej", "tjena", "tja"].first(function(str){
			return str.indexOf("tj") > -1;
		});
		expect(first).toEqual("tjena");
	});

	it("First person below the age of 19", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Marko", age: 17}];
		var person = personArray.first(function(person){
			return person.age < 19;
		});
		expect(person.name).toEqual("Marko");
	});

	
});