// pega as os elementos do html
var num = document.querySelectorAll('.num');
var text = document.querySelector('#text');
var signal = document.querySelectorAll('.signal');
var igual = document.querySelector('#igual');
var limpar = document.querySelector('#limpar');

var actualSignal;
var number01;
var number02;

// adiciona o evento de click no botão de limpar
limpar.addEventListener( "click", () => {
    text.value = " ";

    number01 = undefined;
    number02 = undefined;
    actualSignal = undefined;
});

// adicionad o evento de click no botão de igual 
igual.addEventListener( "click", () => {
    handleResult();
});

// adiciona o evento de click nos botões de números
num.forEach(element => {
    element.addEventListener( "click", () => {
        handleNumbers(element);
    });
});

// adiciona o evento de click nos botões de sinais
signal.forEach(element => {
    element.addEventListener( "click", () => {

        // muda o sinal da operação
        actualSignal = element.innerText;
        text.value = " ";
    });
});

// Adiciona os números no input text
function handleNumbers( element ) {

    text.value += element.innerText;

    if ( actualSignal == undefined ) {
        if ( number01 == undefined ) {
            number01 = element.innerText;
        } else {
            number01 += element.innerText;
        }

    } else {
        if ( number02 == undefined ) {
            number02 = element.innerText;
        } else {
            number02 += element.innerText;
        }

    }
}

// prepara o input text para receber o resultado e reseta as variaveis 
function handleResult() {

    text.value = " ";
    let result = getResult()
    text.value = isNaN(result) ? 0 : result;

    number01 = text.value;
    number02 = undefined;
    actualSignal = undefined;

}

// realiza as operações
function getResult() {

    switch ( actualSignal ) {
        case "+":
            return parseFloat(number01) + parseFloat(number02);
        case "-":
            return parseFloat(number01) - parseFloat(number02);
        case "/":
            return parseFloat(number01) / parseFloat(number02);
        case "*":
            return parseFloat(number01) * parseFloat(number02);
        default:
            return 0;
        
    }
}


