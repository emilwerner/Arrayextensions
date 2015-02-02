(function () {
    (function whereExample(){
        var array = [1,2,3,4,5,6,7,8,9,10]
        var filteredArray = array.where(function(item){
            return item < 5;
        });
        console.log(array, filteredArray);
})();//end whereExample


})();