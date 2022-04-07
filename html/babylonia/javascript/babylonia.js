function calculate (){
    let num = document.getElementById('num').value;
    if(num == "pi"){
        num = 3.14159265358979;
    }
    else if(num == "e"){
        num = 2.71828182845904;
    }
    let i;
    let x = 2;
    for (i = 0; i<16; i++){
        x = (x + (num / x)) / 2;
    }
    document.getElementById('result').value = x;
}

function reset() {
    document.getElementById('result').value = "";
    document.getElementById('num').value = "";
}