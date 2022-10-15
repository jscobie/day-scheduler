$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
    // saveBtn add a listener method 
    $(".saveBtn").on("click", function () {
        // get values and save into varialbles
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // Save time as key and text as value in local storage
        localStorage.setItem(time, text);
        })

        

$("#btn-clear").on("click", function () {
    window.localStorage.removeItem(["8"]);
    window.localStorage.removeItem(["9"]);
    window.localStorage.removeItem(["10"]);
    window.localStorage.removeItem(["11"]);
    window.localStorage.removeItem(["12"]);
    window.localStorage.removeItem(["13"]);
    window.localStorage.removeItem(["14"]);
    window.localStorage.removeItem(["15"]);
    window.localStorage.removeItem(["16"]);
    window.localStorage.removeItem(["17"]);
    window.location.reload();
})