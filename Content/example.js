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

})();