// SWITCH //

const day = Math.floor(Math.random()*10) + 1;

// switch (*the variable*)
switch (day) {
    // case *value*:
    case 1:
        // what is going on
        console.log("Monday");
        console.log(day);
        
        // whenever there's a match,the switch start executing the code from inside this case, until it hits a break
        break;
    case 2:
        console.log("Tuesday");
        console.log(day);
        break;
    case 3:
        console.log("Wednesday");
        console.log(day);
        break;
    case 4:
        console.log("Thursday");
        console.log(day);
        break;
    case 5:
        console.log("Friday");
        console.log(day);
        break;

    case 6:
    case 7:
        console.log("Weekend");
        console.log(day);
        break;
        
    // default - if nothing was happening, do this
    default:
        console.log("What about are you talking?");
        console.log(day);
}