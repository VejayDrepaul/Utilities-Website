const keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61, 173, 191];

document.addEventListener('keydown', (event) => {
    let keyPress = String.fromCharCode(event.keyCode);
    if (event.shiftKey && event.keyCode === 56) {
        document.getElementById('input-box').value += '*';
    } else if (event.shiftKey && event.keyCode === 61) {
        document.getElementById('input-box').value += '+';
    } else if (event.shiftKey && event.keyCode === 191) {
        document.getElementById('input-box').value = '/';
    } else if (keyCodes.includes(event.keyCode)) {
        document.getElementById('input-box').value += keyPress;
    }
});
/*document.onkeydown = function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    if (keyCodes.includes(event.keyCode)) {
        document.getElementById('input-box').value += key_press;
    } else if (event.shiftKey && event.keyCode == 56){
        console.log('*');
    } else {
        document.getElementById('input-box').value += "";
    }
}*/

function display(value) {
    document.getElementById('input-box').value += value;
}

function back() {
    originalString = document.getElementById('input-box').value;
    lastChar = originalString.slice(0, originalString.length - 1);
    document.getElementById('input-box').value = lastChar;
}

function clearDisplay() {
    document.getElementById('input-box').value = "";
    document.getElementById('result-box').value = "";
}

function clearEntry() {
    document.getElementById('input-box').value = "";
}

function solve() {
    let x = document.getElementById('input-box').value;
    display('=');
    let y = eval(x);
    document.getElementById('result-box').value = y;
    document.getElementById('input-box').value = "";
}

function sin() {
    let num = document.getElementById('input-box').value;
    let ans = Math.sin(num);
    document.getElementById('input-box').value = ans;
}

function cos() {
    let num = document.getElementById('input-box').value;
    let ans = Math.cos(num);
    document.getElementById('input-box').value = ans;
}

function tan() {
    let num = document.getElementById('input-box').value;
    let ans = Math.tan(num);
    document.getElementById('input-box').value = ans;
}

function sinInverse() {
    let num = document.getElementById('input-box').value;
    let ans = Math.asin(num);
    document.getElementById('input-box').value = ans;
}

function cosInverse() {
    let num = document.getElementById('input-box').value;
    let ans = Math.acos(num);
    document.getElementById('input-box').value = ans;
}

function tanInverse() {
    let num = document.getElementById('input-box').value;
    let ans = Math.atan(num);
    document.getElementById('input-box').value = ans;
}

function random() {
    let rand = Math.random() * 1000 + 1;
    document.getElementById('input-box').value = rand;
}

function square() {
    let num = document.getElementById('input-box').value;
    let ans = Math.pow(num, 2);
    document.getElementById('input-box').value = ans;
}

function cube() {
    let num = document.getElementById('input-box').value;
    let ans = Math.pow(num, 3);
    document.getElementById('input-box').value = ans;
}

function sqrt() {
    let num = document.getElementById('input-box').value;
    let ans = Math.sqrt(num);
    document.getElementById('input-box').value = ans;
}

function cubeRoot() {
    let num = document.getElementById('input-box').value;
    let ans = Math.cbrt(num);
    document.getElementById('input-box').value = ans;
}

function factorial() {
    let num = document.getElementById('input-box').value;
    let ans = 1;
    for (var i = 2; i <= num; i++) {
        ans = ans * i;
        document.getElementById('input-box').value = ans;
    }
}

function percent() {
    let num1 = document.getElementById('input-box').value;
    document.getElementById('input-box').value == "";
    let num2 = document.getElementById('input-box').value;

    let ans = num1 * (num2 / 100);
    document.getElementById('input-box').value = ans;
}

function powerOfTen() {
    let num = document.getElementById('input-box').value;
    let ans = Math.pow(10, num);
    document.getElementById('input-box').value = ans;
}

function oneDividedX() {
    let num = document.getElementById('input-box').value;
    let ans = 1 / num;
    document.getElementById('input-box').value = ans;
}


function ePower() {
    let num = document.getElementById('input-box').value;
    let ans = Math.pow(Math.E, num);
    document.getElementById('input-box').value = ans;
}

function plusMinus() {
    let val = document.getElementById('input-box').value;
    val = "-" + val;
    document.getElementById('input-box').value = "";
    document.getElementById('input-box').value += val;
}

var savedNumer;
function memoryAdd() {
    savedNumer = document.getElementById('result-box').value;
}

function memoryDelete() {
    savedNumer = 0;
}
function memoryRecover() {
    document.getElementById('input-box').value += savedNumer;
}
