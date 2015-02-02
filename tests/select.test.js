
describe("Select is implemented correctly", function() {
	it("Select exists", function() {
		expect([].select).toBeDefined();
	});

	it("Select on empty array returns empty array", function() {
		expect([].select(function(item){
			return item === "whatever"
		}).length).toEqual(0);
	});

	it("Selects age from personarray", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Bert"}];
		var ageArray = personArray.select(function(person){
			return person.age;
		});
		expect(ageArray[0]).toEqual(24);
		expect(ageArray[1]).toEqual(19);
		expect(ageArray[2]).toEqual(21);
		expect(ageArray[3]).toEqual(undefined);
	});


});