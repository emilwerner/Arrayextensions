
describe("Sum is implemented correctly", function() {
	it("Sum exists", function() {
		expect([].sum).toBeDefined();
	});

	it("Sum on empty array returns 0", function() {
		expect([].sum()).toEqual(0);
	});

	it("Sum works with number array", function() {
		expect([1,2,3,4].sum()).toEqual(10);
		expect([1,2,3,4.3].sum()).toEqual(10.3);
	});


	it("Sum works with complex array", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Marko", age: 17}];
		expect(personArray.sum(function(person){
			return person.age;
		})).toEqual(81);
	});

	it("Sum throws error with incorrect datatypes", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Marko", age: "17"}];

		expect(function(){
			personArray.sum(function(person){
				return person.age;
			})
		}).toThrow(new Error("SUM: Values must be numbers"));

		expect(function(){
			personArray.sum(function(person){
				return person;
			})
		}).toThrow(new Error("SUM: Values must be numbers"));

			expect(function(){
			personArray.sum(function(person){
				return person.name;
			})
		}).toThrow(new Error("SUM: Values must be numbers"));


	});

});