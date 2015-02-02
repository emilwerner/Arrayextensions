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
})();