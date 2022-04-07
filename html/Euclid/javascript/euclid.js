function calculate() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('result').value = gcd(num1, num2);
}
function gcd(num1, num2) {
    if (num2 == 0) {
        return num1;
    }
    else {
        return gcd(num2, num1 % num2);
    }
}

function reset() {
    document.getElementById('result').value = "";
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}