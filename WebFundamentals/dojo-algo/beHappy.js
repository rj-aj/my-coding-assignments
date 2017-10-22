//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful(strMsg, timesToCall){
    for(var i = 1; i<=timesToCall; i++){
        console.log("Message: " + strMsg);
    }
}
var strMsg="good morning";
var timestoCall = 98;
beCheerful(strMsg, timestoCall);