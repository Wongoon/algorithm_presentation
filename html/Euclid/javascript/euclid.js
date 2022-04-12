function calculate() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    
    if(num1 == 0 || num2 == 0){
        document.getElementById('result').value = "입력이 잘못되었습니다";
        return;
    }
    else{
        document.getElementById('result').value = gcd(num1, num2);
    }
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