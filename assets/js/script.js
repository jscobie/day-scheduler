// sets the date format for the header section currentDay id for showing on page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// variables for loops if times needed to be adjustable
var startHour = 8;
var endHour = 17;

// when document is ready to the DOM set up the 2 listeners (save and delete), prep a timeSlots function
// and handle how to load from localstorage on load of page
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get values of the time (key) and description(value)
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // Save to the local storage
        localStorage.setItem(time, text);
    })
    
    $(".deleteBtn").on("click", function () {
        // Get values of the time key so we know which to delete
        var deleteTime = $(this).parent().attr("id");
    
        //remove single item from localstorage and refresh page to show deleted item gone
        localStorage.removeItem(deleteTime);
        window.location.reload();
    })    

    // this applies the color/scheme to the time slots based on is it past, present, or future.
    function timeSlots() {
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
    
    // this handles the loading of localstorage data to the page on reloads or revisits
    for (let i = startHour; i< endHour+1; i++) {
        $("#" + [i] + " .description").val(localStorage.getItem([i]));
    }

    // once page/DOM is loaded run the timeSlots function to set up page for loaded values and color/scheme
    timeSlots();
})

// clear all stored values in calendar/local storage and reload page
$("#btn-clear").on("click", function () {
    window.localStorage.clear();
    window.location.reload();
})