# Arrayextensions
This is a plugin that extends the functionality of the array type in JavaScript. Coming from a .NET background I often miss the use of LINQ for IEnumerables and because of that I decided to implement my own version of it for JavaScript. Features are implemented and updated when I have a need for them.


Implemented functions:

<ul>
	<li>Where</li>
	<li>First</li>
	<li>Any</li>
	<li>Select</li>
	<li>Skip</li>
</ul>

TODO:
<ul>
	<li>Sum</li>
	<li>Average</li>
	<li>Orderby</li>
	<li>OrderbyDescending</li>
	<li>Max</li>
	<li>Min</li>
	<li>Take</li>
	
</ul>


##Where
```javascript
var array = [1,2,3,4,5,6,7,8,9,10]
var filteredArray = array.where(function(item){
    return item < 5;
});
//filteredArray = [1,2,3,4]
```

##First
```javascript
var array = [{name:"Emil", id:1},{name:"Anders", id:13},{name:"Kalle", id:43}]

var firstItem = array.first(function(item){
    return item.id === 13;
});
//firstItem = {name:"Anders", id:13}
```


##Any
```javascript
var array = [1,2,3,4,5,6,7,8,9,10]

var hasAny = array.any();
//hasAny = true

var hasAnyOver13 = array.any(function(item){
    return item > 13;
});
//hasAnyOver13 = false
```

##Select
```javascript
var array = [{name:"Emil", id:1},{name:"Anders", id:13},{name:"Kalle", id:43}]

var selectedItems = array.select(function(item){
    return item.name;
});
//selectedItems = ["Emil", "Anders", "Kalle"]
```


##Skip
```javascript
var array = [1,2,3,4,5,6,7,8,9,10];
var subset = array.skip(7);
//subset = [8,9,10]
```


       