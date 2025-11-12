
document.querySelector('#btnSuma').addEventListener('click', sumar)

function sumar() {
    console.log("btnSumar")
    const num1 = parseInt(document.querySelector('#num1').value)
    const num2 = parseInt(document.querySelector('#num2').value)
    const divResultado = document.querySelector('#resultado')
    divResultado.innerHTML = `El resultado es: ${num1 + num2}`
}


document.querySelector('#btnMultiplicar').addEventListener('click', multiplicar)

function multiplicar() {
    console.log("btnMultiplicar")
    const numero = parseInt(document.querySelector('#numero').value)
    const divTabla = document.querySelector('#tabla')
    divTabla.innerHTML = ''

    let resultado = `<h4>Tabla de multiplicar del ${numero}</h4>`
    if(numero > 0 && numero <11){
        
        for (let i = 1; i <= 10; i++) {
          resultado += `${numero} x ${i} = ${numero * i}<br>`
        }
    }

    if(numero < 0){
         divTabla.innerHTML = `<p>El numero es mas pequeño que 0</p>`
    }
    if(numero > 10){
         divTabla.innerHTML = `<p>El numero es mas grande que 10</p>`
    }

    divTabla.innerHTML = resultado
    
}
