(function(){
	Array.prototype.where = function (func) {
		if(!func) throw new Error("Argument for Where is required");

		var newArray = [];
		for (var i = 0; i < this.length; i++) {
			if(func(this[i])){
				newArray.push(this[i]);
			}
		};
		return newArray;
	}; //end where

	Array.prototype.first = function (func) {
		var obj;
		if(func){
			for (var i = 0; i < this.length; i++) {
				if(func(this[i])){
					obj = this[i];
					break;
				}
			};
		}
		else{
			obj = this[0];
		}

		return obj;
	}; //end first

	Array.prototype.any = function (func) {
		var hasAny = false;
		if(func){
			for (var i = 0; i < this.length; i++) {
				if(func(this[i])){
					hasAny = true;
					break;
				}
			};
		}
		else{
			hasAny = this.length > 0;
		}		
		return hasAny;
	}; //end any

	Array.prototype.select = function (func) {
		if(!func) throw new Error("Argument for Select is required");

		var newArray = [];
		for (var i = 0; i < this.length; i++) {
			newArray.push(func(this[i]));
		};
		return newArray;
	}; //end select

	Array.prototype.skip = function (count) {
		if(!count) throw new Error("Argument for Skip is required");

		var newArray = [];
		for (var i = count; i < this.length; i++) {
			newArray.push(this[i]);
		};
		return newArray;
	}; //end skip

	Array.prototype.take = function (count) {
		if(!count) throw new Error("Argument for Take is required");

		var newArray = [];
		if(count > this.length){
			count = this.length;
		}
		for (var i = 0; i < count; i++) {
			newArray.push(this[i]);
		};
		return newArray;
	}; //end take

	Array.prototype.reverse = function () {
		var newArray = [];
		for (var i = this.length - 1; i >= 0; i--) {
			newArray.push(this[i]);
		};
		return newArray;
	}; //end reverse

	Array.prototype.remove = function (func) {
		if(!func) throw new Error("Argument for Remove is required");
		var newArray = [];
		for (var i = 0; i < this.length; i++) {
			if(!func(this[i])){
				newArray.push(this[i]);
			}
		};
		return newArray;
	}; //end remove

	Array.prototype.sum = function (func) {
		var sum = 0;
		for (var i = this.length - 1; i >= 0; i--) {
			if(func){
				sum += func(this[i]);
			}
			else{
				sum += this[i];
			}		
		};
		if(typeof sum !== 'number'){
			throw new Error("SUM: Values must be numbers");
		}
		return sum;
	}; //end sum

	Array.prototype.average = function (func) {
		var average = 0;
		var theArray;
		if(func){
			theArray = this.select(func);
		}
		else{
			theArray = this;
		}
		try{
			var sum = theArray.sum();
		}
		catch(err){
			throw new Error("Average only works with numbers");
		}

		if(this.length > 0){
			var nrOfItems = this.length;
			average = sum/nrOfItems;
		}

		return average;
	}; //end average
})();