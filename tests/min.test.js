
describe("Min is implemented correctly", function() {
	it("Min exists", function() {
		expect([].min).toBeDefined();
	});

	it("Min works with numbers", function() {	
		expect([1,7,23.5,22].min()).toEqual(1);
		expect([7,23.5,32].min()).toEqual(7);
	});	

	it("Min works with objects", function() {	
		expect([{age:20},{age:10},{age:30},{age:25}].min(function(person){
			return person.age;
		})).toEqual(10);

		expect([{age:20},{age:8},{age:30},{age:35}].min(function(person){
			return person.age;
		})).toEqual(8);		
	});	


	it("Min throws error when not number", function() {	
		expect(function(){
			[{age:20},{age:"10"},{age:30},{age:35}].min(function(person){
				return person.age;
			});
		}).toThrow(new Error("Min only works with numbers"));	
	});	
});

