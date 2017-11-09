/* 
Print and Count
Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
*/

function multiplesOfFive(startNum, endNum) {
    var count = 0;
    for (var i = startNum; i <= endNum; i++) {
        if (i % 5 == 0) {
            console.log(i);
            count++;
        }
    }
    console.log("There are " + count + " multiples of 5 between intergers " + startNum + " and " + endNum);
}

multiplesOfFive(512, 4096);