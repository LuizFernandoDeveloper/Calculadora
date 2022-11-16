const btnCC = document.getElementById('CC');
const btnDivision = document.getElementById('division');
const btnMultiplication = document.getElementById('multiplication');
const btnSubtraction = document.getElementById('subtraction');
const btnAddition = document.getElementById('addition');

const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');

const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnSeven = document.getElementById('btn-seven');
const btnEight = document.getElementById('btn-eight');

const btnNine = document.getElementById('btn-nine');
const btnZero = document.getElementById('btn-zero');
const btnDot  =  document.getElementById('btn-dot');
const btnEqual = document.getElementById('equal');

let arrayButtons = [];
let arrayNumber = [];

let arrayOperatorMultiplication = [null, 'X', null];
let arrayOperatorDivision =  [null, '/', null];
let arrayOperatorSubtraction = [null, '-', null];
let arrayOperatorAddition = [null, '+', null];

btnCC.addEventListener('click', function(e){
    e.preventDefault();
    do{
        arrayButtons.pop();
    }while(arrayButtons.length);
});

btnDivision.addEventListener('click', function(e){
    e.preventDefault();
    
    if(OperatorManager() == true){
        arrayButtons.push(btnDivision.valeu);
    };
});

btnMultiplication.addEventListener('click', function(e){
    e.preventDefault();

    if(OperatorManager() == true){
        arrayButtons.push(btnMultiplication.value);
    };
});

btnSubtraction.addEventListener('click', function(e){
    e.preventDefault();

    if(OperatorManager() == true){
        arrayButtons.push(btnSubtraction.value);
    };
});

btnAddition.addEventListener('click', function(e){

    e.preventDefault();

    if(OperatorManager() == true){
        arrayButtons.push(btnAddition.value);
    };
});

btnOne.addEventListener('click', function(e){
    
    e.preventDefault();
    arrayButtons.push(parseInt(btnOne.value));
});

btnTwo.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnTwo.value));
});

btnThree.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnThree.value));
});

btnFour.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnFour.value));
});

btnFive.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnFive.value));
});

btnSix.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnSix.value));
});

btnSeven.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnSeven.value));
});

btnEight.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnEight.value));
});

btnNine.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnNine.value));
});

btnZero.addEventListener('click', function(e){
    e.preventDefault();
    arrayButtons.push(parseInt(btnZero.value));
});

btnEqual.addEventListener('click', function(e){
    e.preventDefault();

});

function resul(){
    let arrayMemory = [];
    let memory = 0;
    let reference = false;

    for(let i = 0 ; i <  arrayButtons.length; i++){
        if(arrayButtons[i] == '/' || arrayButtons[i] == 'X' || arrayButtons[i] == '-' || arrayButtons[i] == '+'){
            arrayMemory[memory] = i;
            memory ++;
            if(typeof(arrayButtons[arrayMemory[memory + 1]]) != "number"){
                alert()
                reference = true;
            };
        };
        
    };
    if(reference == false){
        let compare = 0;
        let compareLate = 0;
        do{
            if(compare == 0 ){
                arrayNumber[compare] = arrayButtons.slice(0, arrayMemory[memory])
            }
            if(compare > 0){
                if(arrayMemory.length == 1){
                    arrayNumber[compare] = arrayButtons.slice(arrayMemory[0], arrayButtons.length)
                }
                if(compare  == arrayMemory.length){
                    arrayNumber[compare] = arrayButtons.slice(arrayMemory[compareLate], arrayButtons.length)
                }
                else{
                    arrayNumber[compare] = arrayButtons.slice(arrayMemory[compareLate], arrayMemory[compare])
                }
                compareLate ++;
            }
            compare ++;  
        }while( compare < arrayMemory.length);
        let resultado = o;
        let compareTwo = 0;
        do{
            switch(arrayButtons[arrayMemory[compareTwo]]){
            case 'X':
                arrayOperatorMultiplication[0] = 
                
                break;
            case '/':

                break;
            case '+':
            
                break;
            case '-':
            
                break;
        };
        compareTwo ++;
        
    };


    

};

function OperatorManager(){

    let reference = true;
    
    switch(arrayButtons[0]){
        case '/':
            alert(`você digitou isso:${arrayButtons[0]}.Você não pode digitar um operador sem antes digitar  um numero`);
            reference = false;
            break;
        case 'X':
            alert(`você digitou isso:${arrayButtons[0]}.Você não pode digitar um operador sem antes digitar  um numero`);
            reference = false;
            break;
        case '-':
            alert(`você digitou isso:${arrayButtons[0]}.Você não pode digitar um operador sem antes digitar  um numero`);
            reference = false;
            break;
        case '+':
            alert(`você digitou isso:${arrayButtons[0]}.Você não pode digitar um operador sem antes digitar  um numero`);
            reference = false;
            break;
    };
    if(reference == true){
        let memory = 0;
        let arrayMemory = [];

        for(let i = 0; i < arrayButtons.length; i++){
            if(arrayButtons[i] == '/' || arrayButtons[i] == 'X' || arrayButtons[i] == '-' || arrayButtons[i] == '+'){
                arrayMemory[memory] = arrayButtons[i];
                memory ++;
            };
        };
        for(let i = memory; i > memory; i --){
            if(arrayButtons[arrayMemory[memory] - 1] == '/' || arrayButtons[arrayMemory[memory] - 1] == 'X' || arrayButtons[arrayMemory[memory] - 1] == '-' || arrayButtons[arrayMemory[memory] - 1] == '+'){
                alert(`você digitou isso:${arrayButtons[0]}.Você não pode digitar um operador sem antes digitar  um numero`);
                reference = false;
            }
            memory --;
        };
    };
    return reference;
};