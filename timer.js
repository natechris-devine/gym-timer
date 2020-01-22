// Timer
let tmr_timer = 0; //countdown timer in seconds
let tmr_running = false;
let tmr_timerID;
let th = 0;
let tm = 0;
let ts = 0;

function selectTime() {
    
    let hh = parseInt($("#hr").val());
    let mm = parseInt($("#min").val());
    let ss = parseInt($("#sec").val());
    if (isNaN(hh)) {hh = th}
    if (isNaN(mm)) {mm = tm}
    if (isNaN(ss)) {ss = ts}
    if (!(hh < 0 || mm < 0 || ss < 0 || ss >= 60 || mm >= 60)) {
        th = hh;
        tm = mm;
        ts = ss
        updateTimer();
        console.log(tmr_timer);
        $("#timerModal").modal('hide');
    }
}

function updateTimer(running=false) {
    let ss;
    let mm;
    let hh;
    if (!running) {
        tmr_timer = (th * 60 * 60) + (tm * 60) + ts;
        ss = checkTime(ts);
        mm = checkTime(tm);
        hh = checkTime(th);
    } else {
        tmr_timer -= 1;
        ss = checkTime(getTimeUnit("s"));
        mm = checkTime(getTimeUnit("m"));
        hh = checkTime(getTimeUnit("h"));
    }
    
    $("#countdown").html(`${hh}:${mm}:${ss}`);
}

function getTimeUnit(unit) {
    if (unit == "h") {return Math.floor(tmr_timer / (60 * 60))}
    else if (unit == "m") {return Math.floor((tmr_timer % (60 * 60)) / 60)}
    else if (unit == "s") {return Math.floor((tmr_timer % 60))}
}

function tmrRun() {
    if(!tmr_running) {
        tmr_running = true;
        $("#tmr-start").html("Stop");
        tmr_timerID = setInterval(tmrCountDown, 1000);
    } else {
        tmr_running = false;
        $("#tmr-start").html("Start");
        clearInterval(tmr_timerID);
    }
}

function tmrCountDown() {
    if (tmr_timer > 0) {
        updateTimer(true);
    } else {
        clearInterval(tmr_timerID);
        updateTimer();
        tmr_running = false;
        $("#tmr-start").html("Start");
    }
    
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function tmrReset() {
    $("#tmr-start").html("Start");
    if (tmr_timerID) {clearInterval(tmr_timerID);}
    updateTimer();
}

function tmrClear() {
    ts = 0;
    tm = 0;
    th = 0;
    $("#tmr-start").html("Start");
    if (tmr_timerID) {
        clearInterval(tmr_timerID);
        updateTimer();
    }
}