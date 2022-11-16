
const menu = document.getElementById('menu')
let memory = 0;


let arrayButtons = [];
alert(arrayButtons[0])

menu.addEventListener('click', function(e){ 

    e.preventDefault();



    if (window.location.pathname == '/' || window.location.pathname == '/index.html' ){
        if(memory == 1){
            document.getElementsByClassName('calculator-shape')[0].style.marginTop = '-180px';
            document.getElementsByClassName('cabecalho')[0].style.height = '180px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'none';
            let muda = '<img src="./assets/images/menu.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 0;
        }
        else{
            document.getElementsByClassName('calculator-shape')[0].style.marginTop = '-350px';
            document.getElementsByClassName('cabecalho')[0].style.height = '350px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'block';
            let muda = '<img src="./assets/images/menux.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 1;
        }
    }

    else if (window.location.pathname == '/historic.html'){

        if(memory == 1){
            document.getElementById('shape-history').style.marginTop = '-150px'
            document.getElementsByClassName('cabecalho')[0].style.height = '180px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'none';
            let muda = '<img src="./assets/images/menu.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 0;
        }
        else{
            document.getElementById('shape-history').style.marginTop = '-320px'
            document.getElementsByClassName('cabecalho')[0].style.height = '350px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'block';
            let muda = '<img src="./assets/images/menux.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 1;
        }

    }

    else{

        if(memory == 1){
            document.getElementsByClassName('contact-me')[0].style.marginTop = '-210px';
            document.getElementsByClassName('cabecalho')[0].style.height = '180px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'none';
            let muda = '<img src="./assets/images/menu.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 0;
        }
        else{
            document.getElementsByClassName('contact-me')[0].style.marginTop = '-380px';
            document.getElementsByClassName('cabecalho')[0].style.height = '350px';
            document.getElementsByTagName('header')[0].style.transition = "background .3s";
            document.getElementsByClassName('links')[0].style.display = 'block';
            let muda = '<img src="./assets/images/menux.svg" alt="Icone menu" id="menu">'
            menu.innerHTML = muda;
            memory = 1;
        }

    }
});

