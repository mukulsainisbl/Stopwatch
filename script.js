
let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function Start() {
    timer = true;
    myFunction();
}

function Stop() {
    timer = false;
}

function Reset() {
    location.reload();
}

function myFunction() {
    if (timer == true) {
        milli = milli + 1;
        if (milli == 100) {
            sec = sec + 1;
            milli = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        let getmilli = milli
        let getsec = sec;
        let getmin = min;
        let gethr = hr;
        if(milli <= 0){
            getmilli ="0"+milli
        }
        if (sec < 10) {
            getsec = "0" + sec;
        }
        if (min < 10) {
            getmin = "0" + min;
        }
        if (hr < 10) {
            gethr = "0" + hr;
        }

        setTimeout(myFunction, 10);
        document.getElementById("hr").innerHTML = gethr;
        document.getElementById("min").innerHTML = getmin;
        document.getElementById("sec").innerHTML = getsec;
        document.getElementById("milli").innerHTML = getmilli;
    }
}
