var concatenatedNumber = "";
var armazenar;
var cont = 0;


function addNum(num) {
    concatenatedNumber += num;
    document.getElementById('interface').innerHTML = concatenatedNumber;
}

function somar() {
    armazenar = parseFloat(concatenatedNumber);
    cont = armazenar + cont;
    concatenatedNumber = ""
    document.getElementById('interface').innerHTML = cont;
}
function subtrair() {
    armazenar = parseFloat(concatenatedNumber);
    cont = cont - armazenar;
    concatenatedNumber = ""
    document.getElementById('interface').innerHTML = cont;
}
function divi() {
    armazenar = parseFloat(concatenatedNumber);
    if (cont === 0) {
        cont = 1;
        cont = armazenar / cont;
    }else{
        cont = armazenar / cont
    }
    concatenatedNumber = ""
    document.getElementById('interface').innerHTML = cont;
}
function mult() {
    armazenar = parseFloat(concatenatedNumber);
    if (cont === 0) {
        cont = 1;
        cont = armazenar * cont;
    }else{
        cont = armazenar * cont
    }
    concatenatedNumber = ""
    document.getElementById('interface').innerHTML = cont;
}
function enter() {
    document.getElementById('interface').innerHTML = cont;
    cont = 0;
    concatenatedNumber = "";
}
