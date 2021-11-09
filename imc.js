function Calcular (){

    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    let textoIndice = document.getElementById('TextoIndice');
    let textoIMC = document.getElementById('IMC')
    
    let imc = ((Number(peso.value) )/ (Number(altura.value) * Number(altura.value) / 10000)).toFixed(2);

    textoIMC.innerHTML = ` ${imc}`;

    if(imc <18.5){
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Abaixo do Peso</p>
        `

    }
    else if (imc>=18.5 && imc <= 24.9) {
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Peso Normal</p>`
    } 
    else if (imc>= 25 && imc <= 29.9){
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Sobrepeso</p>`
    }
    else if (imc >=30 && imc <= 34.9){
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Obesidade Grau I</p>`


    }
    else if(imc >= 35 && imc <= 39.9){
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Obesidade Grau II</p>`
    } 
    else if(imc >= 40){
        textoIndice.innerHTML= `Seu índice de massa corporal é:
        <p>Obesidade Mórbida</p>`
    }



}