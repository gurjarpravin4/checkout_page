// Set the target time using Date() and get the time left in milliseconds till the time from jan 1, 1970 (i.e. Date() - jan1, 1970)
var currentTime = new Date().getTime();
var timerValue = 10000; // 10 second timer for testing
var targetTime = currentTime + timerValue;

// 1 day = 24 hrs = (24*60) = 1440 mins = 1440*60 = 86400 seconds = (86400*1000) = 86400000 milliseconds
const msInADay = 60 * 60 * 24 * 1000;
const msInAnHour = 60 * 60 * 1000;
const msInAMinute = 60 * 1000;
const msInASecond = 1000;

var x = setInterval(function(){
    // Set current time using Date() and getTime()
    currentTime = new Date().getTime();
    // Get the difference between the two in milliseconds
    var msRemaining = targetTime - currentTime;

    //  Count the days remaining:
    var daysRemaining = Math.floor(msRemaining / msInADay);

    // Count the hours remaining
    // We got the days so to get the hours remaining, we need to divide the remaining time by no of milliseconds in an hour
    // i.e 60*60*1000
    var hoursRemaining = Math.floor((msRemaining % msInADay) / msInAnHour);

    // Count the mins remaining
    // We got the hrs so to get the mins remaining, we need to divide the remaining time by no of milliseconds in a min
    // i.e. 60*1000
    var minutesRemaining = Math.floor((msRemaining % msInAnHour) / msInAMinute);

    // Count the Seconds Remaining
    // We got the Minutes remaining to divide the remainingtime my no of milliseconds in a second
    // i.e. 1000
    var secondsRemaining = Math.floor((msRemaining % msInAMinute) / msInASecond);

    var timeRemaining = "<h4>Ends in " + daysRemaining + " Days, " + hoursRemaining + " Hrs, " + minutesRemaining + " Mins, " + secondsRemaining + " Secs" + "</h4>";

    // Update the time remaining
    document.getElementById("timer").innerHTML = timeRemaining;

    // Stopping the timer and resetting the value
    if(msRemaining < 0){
        timeRemaining = "<h4>Ends in -- Days, -- Hrs, -- Mins, -- Secs </h4>";
        document.getElementById("timer").innerHTML = timeRemaining;
        currentTime = new Date().getTime();
        targetTime = currentTime + timerValue;
    }
    
}, 1000);