var end = 0;
var skip = 1;
function range (start, end, skip){
    var num=start;
     while(num < end){
        console.log("--" + num);
        num+=skip;
   }
    
}

range(2,10,2);

