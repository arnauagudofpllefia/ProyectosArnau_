
let padman
const matriz = []
const enemigos = []
let divGeneral = document.querySelector("#divGeneral")


crearMatriz()
console.log(matriz)
generarEnemigos()
generarPadman()
renderMatriz()
moverPadman()

//Creamos la matriz con los valores de las casillas
function crearMatriz() {

    for (let fila = 0; fila < 15; fila++) {
        matriz[fila] = []

        for (let col = 0; col < 20; col++) {
            matriz[fila][col] = " "

        }

    }
}
//hacemos el tablero 
function renderMatriz() {
    let divMatriz = " "
    for (let fila = 0; fila < 15; fila++) {
        divMatriz += `<div class="flex">`

        for (let col = 0; col < 20; col++) {
            
            divMatriz += `<div class="casilla">${matriz[fila][col]}</div>`
            
        }
        divMatriz += `</div>`
    }
    divGeneral.innerHTML = divMatriz
}

//generamos 4 enemigos en posiciones aleatorias y los añadimos al tablero
function generarEnemigos() {

    for (let i = 0; i < 4; i++) {

        
        enemigos[i] = {
            f: Math.floor(Math.random() * 15),
            c: Math.floor(Math.random() * 20),
            vivo: true
        }
        

        matriz[enemigos[i].f][enemigos[i].c] = "<img class='padman' src='img/enemigo.png' alt='enemigo'/>"
        renderMatriz()
    }  

}


//generamos el pacman en medio del tablero
function generarPadman() {
    let f = 8, c = 8
    if (matriz[f][c] === "<img class='padman' src='img/enemigo.png' alt='enemigo'/>") {
        f = 0; c = 0
    }
    matriz[f][c] = "<img class='padman' src='https://upload.wikimedia.org/wikipedia/commons/2/26/Pacman_HD.png' alt='Pacman'/>"
    //guardo la fila y la columna del pacman
    padman = { f, c }
}

function moverPadman() {
    document.addEventListener("keydown", function (e) {
        //inicializo f y c y las guardo en padman
        let { f, c } = padman
        //creamos las variables para las nuevas posiciones
        let nf = f
        let nc = c
        //Cada condicion comprueba que tecla se ha pulsado y actualiza la fila o la columna
        if (e.key === "ArrowUp" && f > 0) nf--
        if (e.key === "ArrowDown" && f < 14) nf++
        if (e.key === "ArrowLeft" && c > 0) nc--
        if (e.key === "ArrowRight" && c < 19) nc++

        if (nf !== f || nc !== c) {
            //borra la posicion antigua del pacman
            matriz[f][c] = ""

            matriz[nf][nc] = "<img class='padman' src='https://upload.wikimedia.org/wikipedia/commons/2/26/Pacman_HD.png' alt='Pacman'/>"
            //actualiza la posicion del padman con la nueva posición
            padman = { f: nf, c: nc }
            renderMatriz()
        }
    });
}

