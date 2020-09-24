var schedule = $(".container");
var date = $("#currentDay");
var time = $(".time-block");
var currentTime = moment().format("hh");
var currentMilitaryTime = moment().format("HH")
var toDo = [];

$(document).ready(function(){
    date.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
    setInterval(function(){date.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}, 1000)
    
    if(!localStorage.getItem("return")){
        for(var i = 0; i < time.length; i ++){
            var timeDiv = $(time[i]);
            var militTime = timeDiv.attr("id")
            var toDoObject = {
                hour: militTime,
                text: "",
            }
            toDo.push(toDoObject);
            localStorage.setItem("hour-" + militTime, JSON.stringify(toDoObject))
        }
        localStorage.setItem("return", "true");
    }
    //set up rows when page loads
    for(var i = 0; i < time.length; i ++){
        var timeDiv = $(time[i]);
        var militTime = timeDiv.attr("id");

        
        var currentToDoDiv = timeDiv.children("textarea");
        var currentToDoObject = localStorage.getItem("hour-" + militTime);
        currentToDoDiv.text(currentToDoObject.task);
        if (militTime == currentMilitaryTime) {
            timeDiv.addClass("present").removeClass("past future");
        }
        if (militTime < currentMilitaryTime) {
            timeDiv.addClass("past").removeClass("present future");
        }
        if ((militTime > currentMilitaryTime)) {
            timeDiv.addClass("future").removeClass("past present");
        }
    }
});

schedule.find("button").on("click", function(){
    var currentToDoDiv = $(this).parent();
    console.log(currentToDoDiv);
    // var taskUpdate = $(this).parent().find("textarea").
});


