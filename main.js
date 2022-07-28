const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura= Number(inputAltura.value)
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = peso/altura**2;

    if (imc < 18.5){
        setResultado(`Abaixo do peso, com imc de: ${imc.toFixed(2)}`)
    }else if(imc>= 18.5 && imc <= 24.9){
        setResultado(`Peso normal, com imc de: ${imc.toFixed(2)}`)
    }else if(imc >= 25 && imc <= 29.9){
        setResultado(`Sobrepeso, com imc de: ${imc.toFixed(2)}`)
    }else if(imc >= 30 && imc <= 34.9){
        setResultado(`Obesidade grau 1, com imc de: ${imc.toFixed(2)}`)
    }else if(imc >= 35 && imc<= 39.9){
        setResultado(`Obesidade grau 2, com imc de: ${imc.toFixed(2)}`)
    }else if(imc>=40){
        setResultado(`Obesidade grau 3, com imc de: ${imc.toFixed(2)}`)
    }else {console.log('Esse peso não existe')}
   
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg
};


