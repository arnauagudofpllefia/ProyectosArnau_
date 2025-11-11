const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Madrid", "París", "Roma"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Júpiter", "Marte", "Venus"],
        correcta: 0
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote'?",
        respuestas: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el elemento químico con símbolo O?",
        respuestas: ["Oro", "Oxígeno", "Osmio"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        respuestas: ["1969", "1975", "1958"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé"],
        correcta: 0
    },
    {
        pregunta: "¿Qué idioma se habla en Brasil?",
        respuestas: ["Español", "Portugués", "Francés"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el animal terrestre más rápido?",
        respuestas: ["León", "Guepardo", "Tigre"],
        correcta: 1
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo?",
        respuestas: ["China", "Estados Unidos", "Rusia"],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es el océano más grande?",
        respuestas: ["Atlántico", "Pacífico", "Índico"],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrumento tiene teclas blancas y negras?",
        respuestas: ["Guitarra", "Piano", "Violín"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el metal más ligero?",
        respuestas: ["Hierro", "Litio", "Plomo"],
        correcta: 1
    },
    {
        pregunta: "¿En qué continente está Egipto?",
        respuestas: ["Asia", "África", "Europa"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 7 x 8?",
        respuestas: ["54", "56", "58"],
        correcta: 1
    },
    {
        pregunta: "¿Quién descubrió América?",
        respuestas: ["Cristóbal Colón", "Américo Vespucio", "Fernando de Magallanes"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        respuestas: ["Ag", "Au", "O"],
        correcta: 1
    },
    {
        pregunta: "¿Qué país tiene forma de bota?",
        respuestas: ["Italia", "Grecia", "México"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el mamífero más grande?",
        respuestas: ["Elefante", "Ballena azul", "Hipopótamo"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el resultado de 12 + 15?",
        respuestas: ["27", "25", "30"],
        correcta: 0
    }
];

let posicionPregunta = 0
let posicionJugador = 0
let puntuacion = 0
let numPreguntas = document.querySelector("#divNumPregunta")


let jugador = document.querySelector("#divJugador")


const btnTirar = document.querySelector("#btnTirarDado")
btnTirar.addEventListener("click", tirarDado)
let dado = document.querySelector("#divDado")


mostrarPregunta()
mostrarRespuestas()
actualizar()

function tirarDado() {
    let numTirada = numRandom()
    dado.innerHTML = `<p>${numTirada}</p>`
    posicionPregunta += numTirada;
    mostrarPregunta()
    mostrarRespuestas()
    actualizar()

}

function numRandom() {
    let num = Math.floor(Math.random() * 6) + 1
    return num
}

function mostrarPregunta() {
    let preguntaActual = preguntas[posicionPregunta];
    let divPregunta = document.querySelector("#divPreguntas");
    divPregunta.innerHTML = `<h2>${preguntaActual.pregunta}</h2>`;
}
function mostrarRespuestas() {
    let resp1 = document.querySelector("#btnResp1");
    let resp2 = document.querySelector("#btnResp2");
    let resp3 = document.querySelector("#btnResp3");
    resp1.innerHTML = `${preguntas[posicionPregunta].respuestas[0]}`;
    resp2.innerHTML = `${preguntas[posicionPregunta].respuestas[1]}`;
    resp3.innerHTML = `${preguntas[posicionPregunta].respuestas[2]}`;

}

function actualizar() {
    numPreguntas.innerHTML = `Pregunta ${posicionPregunta + 1} de ${preguntas.length}`
    jugador.innerHTML = `
<div>
    <p>Puntuación: ${puntuacion}</p>
</div>
<div>
    <p>Jugador 1</p>
</div>
<div>
    <p>Casilla ${posicionJugador}</p>
</div>`
if(puntuacion >= 20){
    alert("Has ganado")
}
if(puntuacion < 0){
    alert("Has perdido")
}

}
document.querySelector("#btnResp1").addEventListener("click", function (e) {
    if (parseInt(e.target.dataset.resp) === preguntas[posicionPregunta].correcta) {
        puntuacion += 5;
        console.log("Correcto");
    } else {
        puntuacion -= 1;
        console.log("Incorrecto");
    }
    actualizar()
})

document.querySelector("#btnResp2").addEventListener("click", function (e) {
    if (parseInt(e.target.dataset.resp) === preguntas[posicionPregunta].correcta) {
        puntuacion += 5;
        console.log("Correcto");
    } else {
        puntuacion -= 1;
        console.log("Incorrecto");
    }
    actualizar()
})

document.querySelector("#btnResp3").addEventListener("click", function (e) {
    if (parseInt(e.target.dataset.resp) === preguntas[posicionPregunta].correcta) {
        puntuacion += 5;
        console.log("Correcto");
    } else {
        puntuacion -= 1;
        console.log("Incorrecto");
    }
    actualizar()
})




