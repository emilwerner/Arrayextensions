(function () {
    (function whereExample(){
        var array = [1,2,3,4,5,6,7,8,9,10]
        var filteredArray = array.where(function(item){
            return item < 5;
        });
        console.log("WHERE",array, filteredArray);
    })();//end whereExample

    (function firstExample(){
        var array = [{name:"Emil", id:1},{name:"Anders", id:13},{name:"Kalle", id:43}]

        var firstItem = array.first(function(item){
            return item.id === 13;
        });

        console.log("FIRST",firstItem);
    })();//end firstExample

    (function anyExample(){
        var array = [1,2,3,4,5,6,7,8,9,10]

        var hasAny = array.any(function(item){
            return item > 13;
        });

        console.log("ANY",hasAny);
    })();//end anyExample


    (function selectExample(){
        var array = [{name:"Emil", id:1},{name:"Anders", id:13},{name:"Kalle", id:43}];
        var selectedItems = array.select(function(item){
            return item.name;
        });
        console.log("SELECT",selectedItems);
    })();//end selectExample

    (function skipExample(){
        var array = [1,2,3,4,5,6,7,8,9,10];
        var subset = array.skip(7);
        console.log("SKIP",subset);
    })();//end skipExample

    (function takeExample(){
        var array = [1,2,3,4,5,6,7,8,9,10];
        var subset = array.take(4);
        console.log("TAKE",subset);
    })();//end takeExample

    (function reverseExample(){
        var array = [1,2,3,4,5,6,7,8,9,10];
        var subset = array.reverse();
        console.log("REVERSE",subset);
    })();//end reverseExample

})();