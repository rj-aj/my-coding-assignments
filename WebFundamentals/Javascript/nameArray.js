function namePrnt(aray, reverse,symbol) {
    if (reverse==true){
        for (var i = aray.length-1; i >= 0; i--){
            
        console.log(i+" "+symbol+" "+ nameArray[i]);

    

    }
}
   else
    for (var i = 0; i<aray.length; i++){

        console.log(i+" "+symbol+" "+ nameArray[i]);

    }

}

var nameArray=[ "James", "Jill", "Jane", "Jack" ];
var reverse = true;
var symbol = '##';
namePrnt(nameArray, reverse, symbol);