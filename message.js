var today = new Date ();
var hourNow = today.getHours ();
var greeting;

if (hourNow > 18) { //6:00 pm
    greeting = 'Good Afternoon!' ;
}   else if (hourNow > 12) { //12:00 pm
    greeting = 'Good evening!' ;
}   else if (hourNow < 12) { //12:00 am
    greeting = 'Good Morning!' ; 
}   else {
    greeting = 'Welcome!' ;
}


document.write('<h3>' + greeting + '</h3>')