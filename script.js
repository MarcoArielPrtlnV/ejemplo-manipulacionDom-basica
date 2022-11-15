const p = document.querySelector('.suma, .resta, .multiplicacion, .division, .raizcuadrada');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const input7 = document.querySelector('#calculo7');
const input8 = document.querySelector('#calculo8');
const input9 = document.querySelector('#calculo9');
const buttonSuma = document.querySelector('#btnCalcularSuma');
const buttonResta = document.querySelector('#btnCalcularResta');
const buttonMult = document.querySelector('#btnCalcularMult');
const buttonDiv = document.querySelector('#btnCalcularDiv');
const buttonSqt = document.querySelector('#btnCalcularSqt');
const pResult = document.querySelector('.resultSuma');
const pResultResta = document.querySelector('.resultResta');
const pResulMultiplicacion = document.querySelector('.resultMultiplicacion');
const pResulDivision = document.querySelector('.resultDivision');
const pRaizC = document.querySelector('.resultRaizC');

buttonSuma.addEventListener('click', buttonOnClickSuma);
buttonResta.addEventListener('click', buttonOnClickResta);
buttonMult.addEventListener('click', buttonOnClickMultiplicacion);
buttonDiv.addEventListener('click', buttonOnClickDivision);
buttonSqt.addEventListener('click', buttonOnClickRaizC);




function changeOnInput1() {

    console.log('Cambio de valor en input1');
    
}

function changeOnInput2() {

    console.log('Cambio de valor en input2');
    
}

function changeOnInput3() {

    console.log('Cambio de valor en input3');
    
}

function changeOnInput4() {

    console.log('Cambio de valor en input4');
    
}

function changeOnInput5() {

    console.log('Cambio de valor en input5');
    
}

function changeOnInput6() {

    console.log('Cambio de valor en input6');
    
}

function changeOnInput7() {

    console.log('Cambio de valor en input7');
    
}

function changeOnInput8() {

    console.log('Cambio de valor en input8');
    
}

function changeOnInput9() {

    console.log('Cambio de valor en input9');
    
}




function buttonOnClickSuma() {

   const sumaInputs = Number(input1.value)  + parseInt(input2.value);
   pResult.innerHTML = 'El resultado de la suma es:' + " " +  sumaInputs;
    
}


function buttonOnClickResta() {

    const restaInputs = Number(input3.value)  - parseInt(input4.value);
    pResultResta.innerHTML = 'El resultado de la resta es:' + " " +  restaInputs;
     
}

function buttonOnClickMultiplicacion() {

    const multInputs = Number(input5.value)  * parseInt(input6.value);
    pResulMultiplicacion.innerHTML = 'El resultado de la multiplicación es:' + " " +  multInputs;

    
}

function buttonOnClickDivision() {

    const divInputs = Number(input7.value)  / parseInt(input8.value);
    pResulDivision.innerHTML = 'El resultado de la división es:' + " " +  divInputs;
    
}

function buttonOnClickRaizC() {

    const raizCInputs = Math.sqrt (Number(input9.value));
    pRaizC.innerHTML = `La raíz cuadrada de ${input9.value}  es : ${raizCInputs} `;

    
}
