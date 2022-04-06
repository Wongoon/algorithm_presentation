function calculate (){
    let num = document.getElementById('num').value;
    console.log(num)
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