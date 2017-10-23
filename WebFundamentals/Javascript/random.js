function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    //The max. is exclusive and min is inclusive  


}

function randomChange(num_qtr) {
    var randomNumberFromMachine;
    var randomNumberUser;
    console.log(randomNumberFromMachine);
    randomNumberUser = getRandomInt(1, 101);

    while (num_qtr > 0) { 
        console.log('num_qtr:' + num_qtr);
        num_qtr--;
        randomNumberFromMachine = getRandomInt(1, 101);
        console.log('randomNumberUser' + randomNumberUser + ' randomNumberFromMachine:' + randomNumberFromMachine);
        if(randomNumberFromMachine === randomNumberUser){
            var rewardCoins = getRandomInt(50, 101);
            num_qtr =  num_qtr + rewardCoins;
            console.log('Won reward: reward coins' + rewardCoins+ ' num_qtr:' + num_qtr);
            return num_qtr;
        }
    }

    return 0;

}

var retValue = randomChange(10);
console.log('your balance is: ' + retValue + ' quarters');

 