
describe("where is implemented correctly", function() {
	it("Where exists", function() {
		expect([].where).toBeDefined();
	});

	it("Where on empty array does not throw error", function() {
		var emptyArray = [].where(function(item){return true;});
		expect(emptyArray.length).toEqual(0);
	});

	it("Where returns numbers above 5", function() {
		var numberArray = [1,2,3,4,5,6,7,8,9,10].where(function(num){
			return num > 5;
		});
		expect(numberArray.length).toEqual(5);
	});

	it("Where returns numbers below 5", function() {
		var numberArray = [1,2,3,4,5,6,7,8,9,10].where(function(num){
			return num < 5;
		});
		expect(numberArray.length).toEqual(4);
	});

	it("Where works with substring", function() {
		var numberArray = ["hej", "hejsan", "hej hej", "tjena", "tja"].where(function(str){
			return str.indexOf("hej") > -1;
		});
		expect(numberArray.length).toEqual(3);
	});

	it("Where works with complex objects", function() {
		var personArray = [{name:"Emil", age: 24},{name:"Anders", age: 19},{name:"Per", age: 21},{name:"Marko", age: 17}];
		var numberArray = personArray.where(function(person){
			return person.age > 20;
		});
		expect(numberArray.length).toEqual(2);
	});
});