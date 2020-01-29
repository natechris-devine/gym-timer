// import { load, async_load } from './loaders.mjs';

/** Note to self
 * I may decide to just fully make this webpage operate entirely with Javascript rather than incorporating a PHP server
 * to get the different page views.
 */

$(document).ready(() => {
    // load("stopwatch");
    $("#tmr-region").hide();
    $("#wrk-region").hide();

    $("#stopwatch").click(() => {
        $("#stopwatch").addClass("active");
        $("#timer").removeClass("active");
        $("#workoutMaker").removeClass("active");
        $("#sw-region").show();
        $("#tmr-region").hide();
        $("#wrk-region").hide();
    });

    $("#timer").click(() => {
        $("#timer").addClass("active");
        $("#stopwatch").removeClass("active");
        $("#workoutMaker").removeClass("active");
        $("#tmr-region").show();
        $("#sw-region").hide();
        $("#wrk-region").hide();
    });

    $("#workoutMaker").click(() => {
        $("#workoutMaker").addClass("active");
        $("#timer").removeClass("active");
        $("#stopwatch").removeClass("active");
        $("#wrk-region").show();
        $("#tmr-region").hide();
        $("#sw-region").hide();
    });
});


