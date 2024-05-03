let Startbtn = document.getElementById('start');
let Stopbtn = document.getElementById('stop');
let Resetbtn = document.getElementById('reset');


let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

Startbtn.addEventListener('click', function () {
    timer = true;
    stopwatch();
})

Stopbtn.addEventListener('click', function () {
    timer = false;
})

Resetbtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
})


function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
            sec = 0;
        }

        let hrstring = hour;
        let minstring = min;
        let secstring = sec;
        let countstring = count;

        if (hour < 10) {
            hrstring = '0' + hrstring
        }

        if (min < 10) {
            minstring = '0' + minstring
        }

        if (sec < 10) {
            secstring = '0' + secstring
        }

        if (count < 10) {
            countstring = '0' + countstring
        }

        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minstring;
        document.getElementById('sec').innerHTML = secstring;
        document.getElementById('count').innerHTML = countstring;

        setTimeout(stopwatch, 10);

    }
}