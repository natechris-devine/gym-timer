// Timer
let tmr_timer = 0;
let tmr_running = false;
let timerID;
let h = 0;
let m = 0;
let s = 0;

function selectTime(id) {
    const upperLimit = 60;
    let x = parseInt(prompt(`Enter a number less than ${upperLimit}`, 0));
    if (x > 0 && x < upperLimit) {
        if (id == "hr") {h = x}
        else if (id == "min") {m = x}
        else if (id == "sec") {s = x}
    }
    updateTimer();
}

function updateTimer() {
    let ss = checkTime(s);
    let mm = checkTime(m);
    let hh = checkTime(h);
    $("#countdown").html(`${hh}:${mm}:${ss}`);
}

function tmrRun() {
    if(!tmr_running) {
        tmr_running = true;
        $("#tmr-start").html("Stop");
        timerID = setInterval(swCounter, 1000);
    } else {
        tmr_running = false;
        $("#tmr-start").html("Start");
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

function tmrReset() {
    s = 0;
    m = 0;
    h = 0;
    $("#counter").html("00:00:00");
    $("#tmr-start").html("Start");
    if (timerID) {clearInterval(timerID);}
}