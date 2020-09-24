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
        
        toDo[i] = currentToDoObject;
        
        currentToDoDiv.val(currentToDoObject.text);

        if (parseInt(militTime) == parseInt(currentMilitaryTime)) {
            timeDiv.addClass("present").removeClass("past future");
        }
        if (parseInt(militTime) < parseInt(currentMilitaryTime)) {
            timeDiv.addClass("past").removeClass("present future");
        }
        if (parseInt(militTime) > parseInt(currentMilitaryTime)) {
            timeDiv.addClass("future").removeClass("past present");
        }
    }

    schedule.find("button").on("click", function(){
        var currentToDoDiv = $(this).parent();
        var taskUpdate = currentToDoDiv.find("textarea").val().trim();
        var militTime = $(currentToDoDiv).attr("id");
        var toDoUpdate = 

        toDo[parseInt(militTime) - 9].text = taskUpdate;
        localStorage.setItem("hour-" + militTime, JSON.stringify(toDo[parseInt(militTime) - 9]))
    });
});




