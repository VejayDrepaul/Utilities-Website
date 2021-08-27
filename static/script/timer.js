function completeMessage() {
    alert("Time is up");
}

function clickMe() {
    let days = document.getElementById('days').value;
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds').value;
    let milliseconds = document.getElementById('milliseconds').value;

    if (document.getElementById('days').value == "") {
        days = 0;
    } else if (document.getElementById('hours').value == "") {
        hours = 0;
    } else if (document.getElementById('minutes').value == "") {
        minutes = 0;
    } else if (document.getElementById('seconds').value == "") {
        seconds = 0;
    } else {
        if (document.getElementById('milliseconds').value == "") {
            milliseconds = 0;
        }
    }

    let daysMill = days * 86400000;
    let hoursMill = hours * 3600000;
    let minutesMill = minutes * 60000;
    let secondsMill = seconds * 1000;
    let final = daysMill + hoursMill + minutesMill + secondsMill + milliseconds;
    setTimeout(completeMessage, final);
}
