function ReadyToCalculate(){
    let arrayMemory = [];
    let memory = 0;
    for(let i = 0 ; i <= arrayButtons.length; i ++){
        if(OperatorManager(i) == true){
            arrayMemory[memory] = i;
            memory ++;
        }
    }

}



function NumberManager(btnValue){
    arrayButtons.push(btnValue);
    let counter = 0;
    let memory = 1;
    for(let i = 0 ; i <= arrayButtons.length; i++){
        if(arrayButtons[i].isNaN(arrayButtons[i])){
            counter = counter + 1;
        }
        else if(OperatorManager(i) == true){
            let reference = 0;
            reference  =  Math.trunc(counter / 3);
            let dot = 1;
            for(let i = memory; i <= reference ; i++){
                arrayButtons[i].splice(dot,0, '.');
                dot = dot * 3;
            };
            memory = counter + 2;
        }
    }
    
}

function OperatorManager(position){
    if(position != null){
        if(IsOperator(position) == true){
            return true;
        }
        else{
            return false;
        }
    }

    else{
        if(arrayButtons[0] == '/' || arrayButtons[0] == 'X' || arrayButtons[0] == '-' || arrayButtons[0] == '+'){
            alert(`Digite um numero, você digitou:${arrayButtons[0]}`);
            arrayButtons[0].pop();
            return false;
        }
        else if(CheckThePredecessor() == true){
            return false
        }
        else{
            return true;
        }
    }
}

function CheckThePredecessor(){
    let arraymemory = [];
    let memory  = 0;
    for(let i = 0; i <= arrayButtons.length; i++){
        
        if(IsOperator(i) == true){
            arraymemory[memory] = i;
            memory ++;
        }
    }
    let cycle = 0; 
    let check = arraymemory.length;
    do{
        if(arrayButtons[arraymemory[memory] - 1] == '/' || arrayButtons[arraymemory[memory] - 1] == 'X' || arrayButtons[arraymemory[memory] - 1] == '-' || arrayButtons[arraymemory[memory] - 1] == '+'){
            check --;
        }
        if(check != arraymemory.length){
            return false;
        }
        memory --;
        cycle ++; 
    }while(cycle <= arraymemory.length);

    if(check == arraymemory.length){
        return true;
    }
}

function IsOperator(position){
    if(arrayButtons[position] == '/' || arrayButtons[position] == 'X' || arrayButtons[position] == '-' || arrayButtons[position] == '+'){
        return true;
    }
    else{
        return false;
    }
}

function addingButtonValue(btnValue){
    let position  = arrayButtons.length
    let finish = 0
    do{
        if (null = arrayButtons[position]){
            arrayButtons.push(btnValue);
            finish = 1   
        }
        else{
            position = position + 1;
        }
    }while(finish = 0);
}


   
    
function NumberManager(btnValue){
    arrayButtons.push(btnValue);
    let counter = 0;
    let memory = 1;
    for(let i = 0 ; i <= arrayButtons.length; i++){
        if(arrayButtons[i].isNaN(arrayButtons[i])){
            counter = counter + 1;
        }
        else if(OperatorManager(i) == true){
            let reference = 0;
            reference  =  Math.trunc(counter / 3);
            let dot = 1;
            for(let i = memory; i <= reference ; i++){
                arrayButtons[i].splice(dot,0, '.');
                dot = dot * 3;
            };
            memory = counter + 2;
        }
    }
    
}

function OperatorManager(position){
    if(position != null){
        if(IsOperator(position) == true){
            return true;
        }
        else{
            return false;
        }
    }

    else{
        if(arrayButtons[0] == '/' || arrayButtons[0] == 'X' || arrayButtons[0] == '-' || arrayButtons[0] == '+'){
            alert(`Digite um numero, você digitou:${arrayButtons[0]}`);
            arrayButtons[0].pop();
            return false;
        }
        else if(CheckThePredecessor() == true){
            return false
        }
        else{
            return true;
        }
    }
}

function CheckThePredecessor(){
    let arraymemory = [];
    let memory  = 0;
    for(let i = 0; i <= arrayButtons.length; i++){
        
        if(IsOperator(i) == true){
            arraymemory[memory] = i;
            memory ++;
        }
    }
    let cycle = 0; 
    let check = arraymemory.length;
    do{
        if(arrayButtons[arraymemory[memory] - 1] == '/' || arrayButtons[arraymemory[memory] - 1] == 'X' || arrayButtons[arraymemory[memory] - 1] == '-' || arrayButtons[arraymemory[memory] - 1] == '+'){
            check --;
        }
        if(check != arraymemory.length){
            return false;
        }
        memory --;
        cycle ++; 
    }while(cycle <= arraymemory.length);

    if(check == arraymemory.length){
        return true;
    }
}

function IsOperator(position){
    if(arrayButtons[position] == '/' || arrayButtons[position] == 'X' || arrayButtons[position] == '-' || arrayButtons[position] == '+'){
        return true;
    }
    else{
        return false;
    }
}

function addingButtonValue(btnValue){
    let position  = arrayButtons.length
    let finish = 0
    do{
        if (null = arrayButtons[position]){
            arrayButtons.push(btnValue);
            finish = 1   
        }
        else{
            position = position + 1;
        }
    }while(finish = 0);
}