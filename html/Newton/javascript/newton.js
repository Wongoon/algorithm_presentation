function calculate (){
    let num = document.getElementById('num').value;
    if(num == "pi"){
        num = 3.14159265358979;
    }
    else if(num == "e"){
        num = 2.71828182845904;
    }
    else if(num < 0){
        document.getElementById('result').value = "입력이 잘못되었습니다";
    }
    let i, x, y;
    x = num;
    for (i = 1; i <= 16; i++){
        y = 0.5 * (x + (num / x));
        x = y;
    }
    
    document.getElementById('result').value = y;
}

function reset() {
    document.getElementById('result').value = "";
    document.getElementById('num').value = "";
}
