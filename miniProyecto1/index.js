const intentosMax = 5
const rangoMin = 1
const rangoMax = 100
let intentosRestantes = intentosMax
let numeros = []

const mensajeGanar = `Has adivinado el número <button id="btnVolver">Volver a jugar</button>`
const texto = document.querySelector("#texto");
const divIntentos = document.querySelector("#divIntentos")
const historial = document.querySelector("#divHistorial")

function numRandom() {
    return Math.floor(Math.random()*100)  
}

let btnComprobar = document.querySelector("#btnComprobar")
btnComprobar.addEventListener("click", comprobar)
let comprobarNumRandom = numRandom()
const mensajePerder = `Lo siento, te has quedado sin intentos. El número era ${comprobarNumRandom} <button id="btnVolver">Volver a jugar</button>`

function volverJugar() {
    intentosRestantes = intentosMax
    comprobarNumRandom = numRandom()
    texto.innerHTML = ""
    divIntentos.innerHTML = `Te quedan ${intentosRestantes} intentos`
    document.querySelector("#numUsuario").value = ""
    numeros = []
    historial.innerHTML = ""
}

function comprobar() {
    const numUsuario = parseInt(document.querySelector("#numUsuario").value)
    
    numeros.push(numUsuario)
    historial.innerHTML = `Números utilizados: ${numeros + "|"}`

    if (numUsuario === comprobarNumRandom) {
        texto.innerHTML = mensajeGanar
        const btnVolver = document.querySelector("#btnVolver")
        btnVolver.addEventListener("click", volverJugar)
    } else {
        intentosRestantes--;
        divIntentos.innerHTML = `Te quedan ${intentosRestantes} intentos`

        if (intentosRestantes === 0) {
            texto.innerHTML = mensajePerder
            const btnVolver = document.querySelector("#btnVolver")
            btnVolver.addEventListener("click", volverJugar)
        } else {
            texto.innerHTML = numUsuario < comprobarNumRandom ?
                "El número es mayor. Intenta de nuevo" :
                "El número es menor. Intenta de nuevo"
        }
    }

    
    document.querySelector("#numUsuario").value = ""
}

