/*
function findEvenIndex(arr)
{
  //Code goes here!
  var sumI = 0;
var sum2 = 0;
var index = 0;
  //Code goes here!
  for (var i = 0; i<arr.length; i++){
   sumI += arr[i];
   sum2 = sumI - arr[i];
    var sumRest = 0;

    for(var j=i+1; j<arr.length && i < (arr.length-1)  ; j++){
    sumRest += arr[j];
   // console.log("j " + j + " sumRest " + sumRest);
    }
    //console.log("i " + i + " sum2 " + sum2 + " sumRest " + sumRest);
   if (sum2 === sumRest){
   index = i;
   console.log(i);
   return index;
   }
  
  } 
}
*/
function findEvenIndex(arr)
{
  //Code goes here!
  // LOOP THROUGH INDEX
    for (var i = 0; i < arr.length; i++) {
      var j = arr.slice(0, i);
      
      var l = arr.slice(i+1, arr.length);
     
  // ADD THE LEFT SIDE AND THE RIGHT SIDE 
      function add(a, b) {
        return a + b;
      }
    var sumLeft = j.reduce(add, 0);
    console.log("sumLeft", sumLeft);
    var sumRight = l.reduce(add, 0);
    console.log("sumRight",sumRight)
  // DOES IS EQUAL THE SAME 
    if (sumLeft === sumRight) {
      return i;
    };
    if (i === arr.length-1 && sumLeft!== sumRight) {
      return -1;
     }
    }


}
  var sif = findEvenIndex([1,2,3,4,3,2,1]);
  console.log(sif);

