function load(page="stopwatch") {
    if (page == "stopwatch") {async_load("stopwatch.php");}
    else if (page == "timer") {async_load("timer.php");}
    else {async_load("workoutMaker.php");}
}

function async_load(endpoint) {
    // This function should connect with a php backend to get the various clock modes.
    console.log(endpoint);
}

export {load, async_load};