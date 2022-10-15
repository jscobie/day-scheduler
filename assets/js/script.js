$("#currentDay").text(moment().format("dddd, MMMM Do"));

// add code for all the main stuff

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