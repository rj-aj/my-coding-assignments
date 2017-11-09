//You Say It’s Your Birthday
//If 2 given numbers represent your birth month and day in either order, 
//log "How did you know?", else log "Just another day....",
//Example: given yourBirthday(4,19) or yourBirthday(19,4)

function yourBirthday(num1, num2) {
    if ((num1 == 7) && (num2 == 23)) {
        console.log("How did you know ?");
    } else if ((num1 == 23) && (num2 == 7)) {
        console.log("How did you know");
    } else {
        console.log("Just another day....");
    }
}

yourBirthday(23, 7);