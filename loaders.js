function load(page="stopwatch") {
    if (page == "stopwatch") {async_load("stopwatch.php");}
    else if (page == "timer") {async_load("timer.php");}
    else {async_load("workoutMaker.php");}
}

function async_load(endpoint) {
    console.log(endpoint);
}

export {load, async_load};