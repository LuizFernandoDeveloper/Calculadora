const ScreenNumber = document.getElementById('screen-number');
const ScroolHistory = document.getElementById('scroll-history');
let numeros = '';

function btnCC(){
    numeros = "";
    ScreenNumber.innerHTML = numeros;
}

function btnDividir(){
    baseParaOperadores('/')
}

function btnMultiplicar(){
    baseParaOperadores('*')
}

function btnSomar(){
    baseParaOperadores('+')
}

function btnSubtrair(){
    baseParaOperadores('-')
}

function btnNumberOne(){
    numeros += 1;
    ScreenNumber.innerHTML = numeros;
}

function btnNumberTwo(){
    numeros += 2;
    ScreenNumber.innerHTML = numeros;
}

function btnNumberThree(){
    numeros += 3;
    ScreenNumber.innerHTML = numeros;
}

function btnNumberFour(){
    numeros += 4;
    ScreenNumber.innerHTML = numeros;
}


function btnNumberFive(){
    numeros += 5;
    ScreenNumber.innerHTML = numeros;
}

function btnNumberSix(){
    numeros += 6;
    ScreenNumber.innerHTML = numeros;
}


function btnNumberSeven(){
    numeros += 7;
    ScreenNumber.innerHTML = numeros;
}


function btnNumberEight(){
    numeros += 8;
    ScreenNumber.innerHTML = numeros;
}


function btnNumberNine(){
    numeros += 9;
    ScreenNumber.innerHTML = numeros;
}


function btnNumberZero(){
    numeros += 0;
    ScreenNumber.innerHTML = numeros;
}

function btnDot(){
    baseParaOperadores('.');
}

function btnequals(){
    let resultado  = eval(numeros);
    ScreenNumber.innerHTML = resultado;
    ScroolHistory.innerHTML += `<div class="history-line"><span>${numeros} = ${resultado}</span></div>`
}



function baseParaOperadores(operador){

    let check = numeros.length > 0 ? numeros.length - 1 : numeros.length;

    if(numeros.length >= 1){
        switch(numeros[check]){
            case 'X':
                alert("Não pode digitar dois operadores seguidos");
                break;
            case '/':
                alert("Não pode digitar dois operadores seguidos");
                break;
            case '+':
                alert("Não pode digitar dois operadores seguidos");
                break;
            case '-':
                alert("Não pode digitar dois operadores seguidos");
                break;
            case '.':
                    alert("Não pode digitar dois operadores seguidos");
                    break;
            default:
                numeros += operador;
        }
    }
    else{
        alert("Digite um numero");
    }
    ScreenNumber.innerHTML = numeros;
    
}