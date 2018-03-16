
// Print 1-255
// Print all the integers from 1 to 255.
// print

for(let idx=1; idx <= 255; idx++) {
    console.log(idx);
}

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
let sum = 0;
for(let idx=0; idx <= 255; idx++) {
    console.log("interger: ",idx +" Sum: ", sum+=idx);
}
// *Find and Print Max
// Given an array, find and print its largest element.
function prntMax(arr){
    largestNum = 0;
    for(let idx=0; idx <= arr.length-1; idx++){
        if(arr[idx] > largestNum){
            largestNum = arr[idx];
           // console.log (largestNum);
        }
        
    }
    return largestNum
}
let max = prntMax([1,23,45,67,3,69,9]);
console.log("max number is : ", max );

//Array with Odds
 // Create an array with all the odd integers between 1 and 255 (inclusive).
let arrayOdd = [];
for(let idx=1; idx <= 255; idx++) {
    if((idx% 2) == 0){
        arrayOdd.push(idx);
    }
 
}
console.log(arrayOdd)

// *Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
let Y = 22;
let count = 0;
let numArr = [22,34,22,56,87,22,45,22,22,23,23,22,22];
for(let idx=0; idx <= numArr.length-1; idx++){
    if(numArr[idx] > Y){
       count ++;
    }
}
console.log("the number of array values greater than Y:", count);

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
let numArr = [1,2,3,4,5,6,7,8];
let max = 0;
let min = numArr[0];
let avg = 0;
let sum = 0;

for(let idx=0; idx <= numArr.length-1; idx++){
    sum+=idx; 
    if (max < numArr[idx]){
        max = numArr[idx];
    }
    if (min > numArr[idx]){
        min = numArr[idx];
    }
}
avg = sum/(numArr.length);
console.log(sum);
console.log("avg:",avg+" min: ",min +" max: ", max);

// *Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
let numArr = [12,-67,34,-33,-34,5]
for(let index = 0; index < numArr.length; index++){
     if ( numArr[index] < 0 ){
         numArr[index] = 'Dojo';
     }
}
console.log('Swaped Array', numArr)
// Print Odds 1-255
// Print all odd integers from 1 to 255.

for(let idx=1; idx <= 255; idx++) {
    if(!(idx%2 === 0)){
        console.log(idx);
    }
    
}

// *Iterate and Print Array
// Iterate through a given array, printing each value.

let numArr = [12,-67,34,-33,-34,5,6,7]
for(let index = 0; index < numArr.length; index++){
     console.log('Array Value at index', index + ' is: ', numArr[index])
     }


// Get and Print Average
// Analyze an array’s values and print the average.
let numArr = [1,2,3,4,5,6,7,8];
let avg = 0;
let sum = 0;

for(let idx=0; idx <= numArr.length-1; idx++){
    sum+=idx; 
    }
avg = sum/(numArr.length);
//console.log( 'Sum is : ,'sum);
console.log("average is:",avg);

// Square the Values
// Square each value in a given array, returning that same array with changed values.

function SquareVal(arr) {
    let val = 0;
    let squared = 0
 for(let idx=0; idx<= arr.length-1; idx++){
    val = arr[idx];
    squared = val * val;
    arr[idx] = squared;
 }
return arr;
}

let numArr = SquareVal([1,2,3,4,5,6,7,8]);
console.log('Squared Values of Array :', numArr);
// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroNegative(arr) {
    let val = 0;
    let squared = 0
 for(let idx=0; idx<= arr.length-1; idx++){
    val = arr[idx];
    squared = val * val;
    arr[idx] = squared;
 }
return arr;
}

let numArr = SquareVal([1,2,3,4,5,6,7,8]);
console.log('Squared Values of Array :', numArr);
// *Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

