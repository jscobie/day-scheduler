// sets the date format for the header section currentDay id for showing on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// variables for loops
var startHour = 8;
var endHour = 17;

$(document).ready(function () {
    // saveBtn add a listener method 
    $(".saveBtn").on("click", function () {
        // get values and save into varialbles
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // Save time as key and text as value in local storage
        localStorage.setItem(time, text);
        })
    
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();
        
        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));
        
            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    
    // store values on click
    // need to figure out how to loop this process, below works but not good code
        //psuedo-code
        // for each # 8-17 set the value in storage to that same number
        // ie start at 8: 8 set value in local storage key 8 to text value in 8 description
    $("#8.description").val(localStorage.getItem("8"));
    $("#9.description").val(localStorage.getItem("9"));
    $("#10.description").val(localStorage.getItem("10"));
    $("#11.description").val(localStorage.getItem("11"));
    $("#12.description").val(localStorage.getItem("12"));
    $("#13.description").val(localStorage.getItem("13"));
    $("#14.description").val(localStorage.getItem("14"));
    $("#15.description").val(localStorage.getItem("15"));
    $("#16.description").val(localStorage.getItem("16"));
    $("#17.description").val(localStorage.getItem("17"));
    
    timeTracker();
})

// clear all stored values in calendar/local storage
        // ?? is there a clear option, be sure to google that too, maybe thats easier, then no loop?
        // testing looping
$("#btn-clear").on("click", function () {
    for (let i = startHour; i< endHour+1; i++) {
        window.localStorage.removeItem([i]);
        window.location.reload();
    }
})