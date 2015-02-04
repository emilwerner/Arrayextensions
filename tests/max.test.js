
describe("Max is implemented correctly", function() {
	it("Max exists", function() {
		expect([].max).toBeDefined();
	});

	it("Max on empty array returns 0", function() {	
		expect([].max()).toEqual(0);
	});	

	it("Max works with numbers", function() {	
		expect([1,7,23.5,2,22].max()).toEqual(23.5);
		expect([1,7,23.5,2,32].max()).toEqual(32);
	});	

	it("Max works with objects", function() {	
		expect([{age:20},{age:10},{age:30},{age:25}].max(function(person){
			return person.age;
		})).toEqual(30);

		expect([{age:20},{age:10},{age:30},{age:35}].max(function(person){
			return person.age;
		})).toEqual(35);		
	});	


	it("Max throws error when not number", function() {	
		expect(function(){
			[{age:20},{age:10},{age:30},{age:"35"}].max(function(person){
				return person.age;
			});
		}).toThrow(new Error("Max only works with numbers"));	
	});	
});

