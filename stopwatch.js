// Stopwatch
let sw_timer = 0;
let sw_running = false;
let timerID;
let h = 0;
let m = 0;
let s = 0;

function swRun() {
    if(!sw_running) {
        sw_running = true;
        $("#sw-start").html("Stop");
        timerID = setInterval(swCounter, 1000);
    } else {
        sw_running = false;
        $("#sw-start").html("Start");
        clearInterval(timerID);
    }
}

function swCounter() {
    s += 1;
    if (s >= 60) {
        m += 1;
        s = 0;
    }
    if (m >= 60) {
        h +=1;
        m = 0;
    }
    let ss = checkTime(s);
    let mm = checkTime(m);
    let hh = checkTime(h);
    $("#counter").html(`${hh}:${mm}:${ss}`);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function swReset() {
    s = 0;
    m = 0;
    h = 0;
    $("#counter").html("00:00:00");
    $("#sw-start").html("Start");
    if (timerID) {clearInterval(timerID);}
}