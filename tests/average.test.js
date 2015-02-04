
describe("Average is implemented correctly", function() {
	it("Average exists", function() {
		expect([].average).toBeDefined();
	});

	it("Average on empty array returns 0", function() {
		expect([].average()).toEqual(0);
	});

	it("Average without argument works", function() {
		expect([].average()).toEqual(0);
	});

	it("Average on numbers works", function() {
		expect([3,6,9].average()).toEqual(6);
	});

	it("Average on objects works", function() {
		var personArray = [{name:"Emil", age: 15},{name:"Marko", age: 45}];
		expect(personArray.average(function(person){
			return person.age;
		})).toEqual(30);
	});

	it("Average throws error when not number", function() {
		expect(function(){
			var personArray = [{name:"Emil", age: "15"},{name:"Marko", age: 45}];
			var x = personArray.average(function(person){
				return person.age;
			});
		}).toThrow(new Error("Average only works with numbers"));
	});
});

