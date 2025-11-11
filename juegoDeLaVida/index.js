const univers = document.querySelector("#divGeneral");
const matriz = []

//llamamos a las funciones con las filas y columnas que queremos
dibuixaUnivers(50, 35)
renderMatriz(50, 35)
console.log(contarVecinos(matriz, 0, 0))

//matriz en console.log
function dibuixaUnivers(numColumnes, numFiles) {

    for (let fila = 0; fila < numFiles; fila++) {
        matriz[fila] = []

        for (let col = 0; col < numColumnes; col++) {
            matriz[fila][col] = aleatorio()
        }

    }
    console.log(matriz)
}

//insetamos la matriz en la pantalla
function renderMatriz(numColumnes, numFiles) {
    let divMatriz = " "
    for (let fila = 0; fila < numFiles; fila++) {
        divMatriz += `<div class="fila">`

        for (let col = 0; col < numColumnes; col++) {
            //miramos si la cailla esta viva a o muerta para aplicarle la clase que le toque
            const clase = matriz[fila][col] ? 'viva' : 'morta'
            divMatriz += `<div class="celula ${clase}"></div>`
        }
        divMatriz += `</div>`
    }
    univers.innerHTML = divMatriz
}

//creamos un numero aleatorio
function aleatorio() {

    const valor = Math.floor(Math.random() * 2)
    return Boolean(valor)


}

//hacemos un test con 10000 intentos para ver el porcentaje de vivas y muertas
let t = 0
let f = 0

for (let i = 0; i < 10000; i++) {
    aleatorio() ? t++ : f++
}
console.log("True: " + t + " False: " + f)


function contarVecinos(matriz, x, y) {
    let contador = 0;

    //recoremos las casillas de alrededor
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            // ignora la propia celula (i=0,j=0)
            if (!(i === 0 && j === 0)) {
                let fila = x + i
                let col = y + j

                //para contolar limites de la matriz
                if (fila >= 0 && fila < matriz.length && col >= 0 && col < matriz[0].length) {
                    if (matriz[fila][col]){
                        contador++
                    } 
                }
            }
        }
    }

    return contador
}

function evolucionarCelula(matriz, fila, col) {

    //Nos guardamos el numero de vecinos vivos
    const vecinosVivos = contarVecinos(matriz, fila, col)

    const viva = matriz[fila][col]

    //Normas del juego
    if (viva) {

        if (vecinosVivos < 2) return false    
        if (vecinosVivos === 2 || vecinosVivos === 3) return true
        if (vecinosVivos > 3) return false   
    } else {
       
        if (vecinosVivos === 3) return true
    }

    return false
}

// Crea y devuelve una nueva matriz despues de aplicar las reglas a cada celula
function crearMatriuEvolucionada(matriuActual) {
    
    const nuevaMatriz = []

    for (let fila = 0; fila < matriuActual.length; fila++) {
        nuevaMatriz[fila] = []

        for (let col = 0; col < matriuActual[fila].length; col++) {
            
            nuevaMatriz[fila][col] = evolucionarCelula(matriuActual, fila, col)
        }
    }

    return nuevaMatriz
}

//recibe la nueva matriz y la actual y copia los valores uno a uno para poder usar los valores actualizados
function copiarMatriu(matriuOrigen, matriuDestino) {
    for (let fila = 0; fila < matriuOrigen.length; fila++) {
        for (let col = 0; col < matriuOrigen[fila].length; col++) {
            matriuDestino[fila][col] = matriuOrigen[fila][col]
        }
    }
}


//inicia la evolucion
let matrizActual = matriz
renderMatriz(matrizActual[0].length, matrizActual.length)

// Cada 400ms calcula la nueva generación, copia el resultado y renderiza
setInterval(function() {
    const nuevaMatriz = crearMatriuEvolucionada(matrizActual)
    copiarMatriu(nuevaMatriz, matrizActual)
    renderMatriz(matrizActual[0].length, matrizActual.length)
}, 400)