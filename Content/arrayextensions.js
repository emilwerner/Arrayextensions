(function(){
	Array.prototype.where = function (func) {
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
		for (var i = 0; i < this.length; i++) {
			if(func(this[i])){
				obj = this[i];
				break;
			}
		};
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
})();