function onlyNum(arr){
   
    for(var i = 0; i<= arr.length; i++){
        if (typeof(arr[i])=== "number"){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var array1=[1, "apple", -3, "orange", 0.5];
var newArray=[];

onlyNum(array1);

console.log (newArray);