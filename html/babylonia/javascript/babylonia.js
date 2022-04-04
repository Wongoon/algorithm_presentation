let num = document.querySelector('.num');
let btn = document.querySelector('.btn');

btn.onclick = babylonia(num);
function babylonia (num){
    let i;
    let x = 2;
    for (i = 0; i<16; i++){
        x = (x + (num / x)) / 2;
    }
    return x;
}
function reset() {
    document.getElementById('result').value = "";
}