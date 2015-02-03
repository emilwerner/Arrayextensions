
describe("Remove is implemented correctly", function() {
	it("Remove exists", function() {
		expect([].remove).toBeDefined();
	});

	it("remove without argument throws error", function() {
		expect([].remove).toThrow(new Error("Argument for Remove is required"));
	});

	it("Remove on empty array returns empty array", function() {
		expect([].remove(function(){
			return true;
		})).toEqual([]);
	});


	it("Remove all gives empty array", function() {
		expect([1,3,6,8,11].remove(function(num){
			return true;
		})).toEqual([]);
	});

	it("Remove none gives original array", function() {
		expect([1,3,6,8,11].remove(function(num){
			return false;
		})).toEqual([1,3,6,8,11]);
	});


	it("Remove single", function() {
		expect([1,2,3,4,5].remove(function(num){
			return num === 5;
		})).toEqual([1,2,3,4]);
	});

	it("Remove multiple", function() {
		expect([1,3,6,8,11].remove(function(num){
			return num > 6;
		})).toEqual([1,3,6,]);
	});

});