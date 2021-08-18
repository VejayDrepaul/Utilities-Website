function display(value) {
    document.getElementById('input-box').value += value;
}

function clearDisplay() {
    document.getElementById('input-box').value = "";
    document.getElementById('result-box').value = "";
}

function solve() {
    let x = document.getElementById('input-box').value;
    display('=');
    let y = eval(x);
    document.getElementById('result-box').value = y;
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
