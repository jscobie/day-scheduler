// sets the date format for the header section currentDay id for showing on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// variables for loops
var startHour = 8;
var endHour = 17;

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // Save text in local storage
        localStorage.setItem(time, text);
    })
    
    $(".deleteBtn").on("click", function () {
        // Get nearby values of the time key
        var deleteTime = $(this).parent().attr("id");
    
        //remove single item from localstorage and refresh page to show deleted item gone
        localStorage.removeItem(deleteTime);
        window.location.reload();
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
    
    for (let i = startHour; i< endHour+1; i++) {
        $("#" + [i] + " .description").val(localStorage.getItem([i]));
    }

    timeTracker();
})

// clear all stored values in calendar/local storage
$("#btn-clear").on("click", function () {
    window.localStorage.clear();
    window.location.reload();
})