const tablero = document.querySelector('.tablero');

/*document.addEventListener('click', e => {
    console.log(`X: ${e.clientX} | Y: ${e.clientY}`);

});*/

const jugador1 = [
    {
        posicion: {
            x: 700,
            y: 535
        }
    },
    {
        casillaActual: 0
    }

]

const jugador2 = [
    {
        posicion: {
            x: 750,
            y: 535
        }

    },
    {
        casillaActual: 0
    }

]

const casillas = [
    { X: 820, Y: 500 },
    { X: 733, Y: 468, tipo: 'salto1' },
    { X: 730, Y: 397, tipo: 'normal' },
    { X: 751, Y: 343, tipo: 'normal' },
    { X: 756, Y: 272, tipo: 'pierdeTurno' },
    { X: 769, Y: 209, tipo: 'normal' },
    { X: 841, Y: 199, tipo: 'avanzaEstrella' },
    { X: 916, Y: 209, tipo: 'normal' },
    { X: 980, Y: 205, tipo: 'normal' },
    { X: 1039, Y: 207, tipo: 'normal' },
    { X: 1096, Y: 208, tipo: 'normal' },
    { X: 1182, Y: 200, tipo: 'vuelveInicio' },
    { X: 1195, Y: 280, tipo: 'normal' },
    { X: 1192, Y: 336, tipo: 'salto2' },
    { X: 1212, Y: 431, tipo: 'normal' },
    { X: 1215, Y: 528, tipo: 'normal' },
    { X: 1125, Y: 527, tipo: 'normal' },
    { X: 1043, Y: 508, tipo: 'pierdeTurno' },
    { X: 936, Y: 525, tipo: 'normal' },
    { X: 854, Y: 525, tipo: 'normal' },
    { X: 824, Y: 459, tipo: 'normal' },
    { X: 828, Y: 365, tipo: 'avanza2Casillas' },
    { X: 836, Y: 296, tipo: 'normal' },
    { X: 901, Y: 278, tipo: 'normal' },
    { X: 967, Y: 271, tipo: 'caer1' },
    { X: 1039, Y: 277, tipo: 'normal' },
    { X: 1116, Y: 278, tipo: 'normal' },
    { X: 1121, Y: 326, tipo: 'normal' },
    { X: 1122, Y: 375, tipo: 'normal' },
    { X: 1117, Y: 420, tipo: 'volverCasilla27' },
    { X: 1040, Y: 420, tipo: 'tirarDeNuevo' },
    { X: 973, Y: 439, tipo: 'normal' },
    { X: 906, Y: 416, tipo: 'caer2' },
    { X: 904, Y: 356, tipo: 'normal' },
    { X: 970, Y: 358, tipo: 'normal' },
    { X: 1040, Y: 359, tipo: 'normal' },

]

const preguntas = [
    {
        pregunta: 'Quina és la capital d\'Espanya?',
        respuestas: ['Barcelona', 'Madrid', 'València'],
        correcta: 1
    },
    {
        pregunta: 'Quin és l\'element químic amb símbol O?',
        respuestas: ['Or', 'Oxigen', 'Osmiridi'],
        correcta: 1
    },
    {
        pregunta: 'Quin any va començar la Segona Guerra Mundial?',
        respuestas: ['1939', '1914', '1945'],
        correcta: 0
    },
    {
        pregunta: 'Quin planeta és conegut com el planeta vermell?',
        respuestas: ['Mart', 'Júpiter', 'Venus'],
        correcta: 0
    },
    {
        pregunta: 'Quina llengua es parla principalment a Mèxic?',
        respuestas: ['Portuguès', 'Espanyol', 'Anglès'],
        correcta: 1
    },
    {
        pregunta: 'Quina és la unitat bàsica de la vida?',
        respuestas: ['Cèl·lula', 'Àtom', 'Orgànul'],
        correcta: 0
    },
    {
        pregunta: 'Quin és l\'idioma oficial del Brasil?',
        respuestas: ['Espanyol', 'Portuguès', 'Francès'],
        correcta: 1
    },
    {
        pregunta: 'Quin riu és el més llarg del món?',
        respuestas: ['Nil', 'Amazonas', 'Yangtze'],
        correcta: 1
    },
    {
        pregunta: 'Quin instrument té tecles i cordes i s\'toca amb un arc?',
        respuestas: ['Piano', 'Violí', 'Guitarra'],
        correcta: 1
    },
    {
        pregunta: 'Quina és la fórmula química de l\'aigua?',
        respuestas: ['CO2', 'H2O', 'O2'],
        correcta: 1
    },
    {
        pregunta: 'Quin esport juga Lionel Messi principalment?',
        respuestas: ['Bàsquet', 'Futbol', 'Tennis'],
        correcta: 1
    },
    {
        pregunta: 'Quina és la moneda del Japó?',
        respuestas: ['Yuan', 'Dòlar', 'Ien'],
        correcta: 2
    },
    {
        pregunta: 'Quin color obtens en barrejar blau i groc?',
        respuestas: ['Verd', 'Taronja', 'Violeta'],
        correcta: 0
    },
    {
        pregunta: 'Quina és la principal font d\'energia del nostre sistema solar?',
        respuestas: ['La Lluna', 'El Sol', 'Júpiter'],
        correcta: 1
    },
    {
        pregunta: 'Quin és l\'animal terrestre més gran?',
        respuestas: ['Elefant africà', 'Rinoceront', 'Girafa'],
        correcta: 0
    },
    {
        pregunta: 'Quin nombre és primer?',
        respuestas: ['15', '17', '21'],
        correcta: 1
    },
    {
        pregunta: 'Quina disciplina estudia els éssers vius?',
        respuestas: ['Geologia', 'Biologia', 'Astronomia'],
        correcta: 1
    },
    {
        pregunta: 'Quina direcció surt el sol per convenció?',
        respuestas: ['Oest', 'Est', 'Nord'],
        correcta: 1
    },
    {
        pregunta: 'Quin instrument mesura la temperatura?',
        respuestas: ['Baròmetre', 'Termòmetre', 'Higròmetre'],
        correcta: 1
    },
    {
        pregunta: 'Quin és l\'idioma més parlado al món (per parlants nadius)?',
        respuestas: ['Anglès', 'Xinès mandarí', 'Espanyol'],
        correcta: 1
    }
]


//Colocar las fichas de los jugadores en la casilla de salida
const divJugador1 = document.querySelector('#divJugador1')
divJugador1.style.left = jugador1[0].posicion.x + 'px'
divJugador1.style.top = jugador1[0].posicion.y + 'px'

const divJugador2 = document.querySelector('#divJugador2')
divJugador2.style.left = jugador2[0].posicion.x + 'px'
divJugador2.style.top = jugador2[0].posicion.y + 'px'


//Añadir la interfaz con el dado
const interfazJ1 = document.querySelector('#interfazJ1')
interfazJ1.innerHTML = `
    <h2>Jugador 1</h2>
    <button class="botonJ1">Tirar dado</button>
    <div id="resultadoDadoJ1"></div>`

const interfazJ2 = document.querySelector('#interfazJ2')
interfazJ2.innerHTML = `
    <h2>Jugador 2</h2>
    <button class="botonJ2">Tirar dado</button>
    <div id="resultadoDadoJ2"></div>`


//Creamos un dado funcional para cada jugador con un evento y una funcion y le pasamos los parametros a la funcion moverficha
const botonJ1 = document.querySelector('.botonJ1')
botonJ1.addEventListener('click', () => {
    const resultado = Math.floor(Math.random() * 6) + 1
    const resultadoDado = document.querySelector('#resultadoDadoJ1')
    resultadoDado.innerHTML = `<p>${resultado}</p>`
    moverFicha(jugador1[1], divJugador1, resultado)
})


const botonJ2 = document.querySelector('.botonJ2')
botonJ2.addEventListener('click', () => {
    const resultado = Math.floor(Math.random() * 6) + 1
    const resultadoDado = document.querySelector('#resultadoDadoJ2')
    resultadoDado.innerHTML = `<p>${resultado}</p>`
    moverFicha(jugador2[1], divJugador2, resultado)
})

//recogemos que jugador es, la ficha y el resultado del dado
function moverFicha(jugador, divJugador, casillasAvanzar) {
    const nuevaPosicion = jugador.casillaActual + casillasAvanzar
    if (nuevaPosicion < casillas.length) {
        //actualizamos los valores
        jugador.casillaActual = nuevaPosicion
        const nuevaCasilla = casillas[nuevaPosicion]

        //movemos ficha
        divJugador.style.left = nuevaCasilla.X + 'px'
        divJugador.style.top = nuevaCasilla.Y + 'px'
        //setTimeout para que no haga todo de golpe
        setTimeout(() => {
            //codicion para que se coman
            if (jugador1[1].casillaActual === jugador2[1].casillaActual) {
                console.log("jugadores en la misma casilla")
                jugador.casillaActual = 0
                divJugador.style.left = 700 + 'px'
                divJugador.style.top = 535 + 'px'

            }
            //Todas las condiciones de las casillas especiales
            if (nuevaCasilla.tipo === 'salto1') {
                console.log("has saltado a la casilla 21")
                jugador.casillaActual = 20
                const casillaSalto1 = casillas[20]
                divJugador.style.left = casillaSalto1.X + 'px'
                divJugador.style.top = casillaSalto1.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'avanzaEstrella') {
                console.log("has saltado a la estrella")
                jugador.casillaActual = 10
                const casillaEstrella1 = casillas[10]
                divJugador.style.left = casillaEstrella1.X + 'px'
                divJugador.style.top = casillaEstrella1.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'vuelveInicio') {
                console.log("has vuleto a inicio")
                jugador.casillaActual = 0
                divJugador.style.left = 750 + 'px'
                divJugador.style.top = 535 + 'px'
            }

            if (nuevaCasilla.tipo === 'salto2') {
                console.log("has saltado a la casilla 29")
                jugador.casillaActual = 28
                const casillaSalto2 = casillas[28]
                divJugador.style.left = casillaSalto2.X + 'px'
                divJugador.style.top = casillaSalto2.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'avanza2Casillas') {
                console.log("avanzas 2 casillas")
                jugador.casillaActual += 2
                const casillaAvanza2 = casillas[jugador.casillaActual];
                divJugador.style.left = casillaAvanza2.X + 'px'
                divJugador.style.top = casillaAvanza2.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'caer1') {
                console.log("caes a la casilla 9")
                jugador.casillaActual = 8
                const casillaCaer1 = casillas[8]
                divJugador.style.left = casillaCaer1.X + 'px'
                divJugador.style.top = casillaCaer1.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'volverCasilla27') {
                console.log("vuelves a la casilla 27")
                jugador.casillaActual = 26
                const casilla27 = casillas[26]
                divJugador.style.left = casilla27.X + 'px'
                divJugador.style.top = casilla27.Y + 'px'
            }

            if (nuevaCasilla.tipo === 'caer2') {
                console.log("caes a la casilla 20")
                jugador.casillaActual = 19
                const casillaCaer2 = casillas[19]
                divJugador.style.left = casillaCaer2.X + 'px'
                divJugador.style.top = casillaCaer2.Y + 'px'
            }
            //condicion casillas normales con pregunta aleatoria
            if (nuevaCasilla.tipo === 'normal') {
                const divPreguntas = document.querySelector('#divPreguntas');
                const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];

                //display block para mostrar la pregunta
                divPreguntas.style.display = 'block';

                divPreguntas.innerHTML = `
                    <div class="divPreguntas">
                        <h3>Pregunta:</h3>
                        <p>${preguntaAleatoria.pregunta}</p>
                        <div class="divRespuestas">
                            <button class="botonRespuesta" data-resuesta="0">${preguntaAleatoria.respuestas[0]}</button>
                            <button class="botonRespuesta" data-resuesta="1">${preguntaAleatoria.respuestas[1]}</button>
                            <button class="botonRespuesta" data-resuesta="2">${preguntaAleatoria.respuestas[2]}</button>
                        </div>
                    </div>
                `;

                //Evento para verificar la respuesta
                divPreguntas.addEventListener("click", (e) => {

                    //Nos guardamos el data-respuesta del boton
                    const respuestaSeleccionada = parseInt(e.target.dataset.resuesta);
                    //escondemos pregunta
                    divPreguntas.style.display = 'none';

                    //Si acertamos sumamos una casilla
                    if (respuestaSeleccionada === preguntaAleatoria.correcta) {
                        console.log("Respuesta correcta");
                        if (jugador.casillaActual < casillas.length - 1) {
                            jugador.casillaActual++;
                            const casillaExtra = casillas[jugador.casillaActual];
                            divJugador.style.left = casillaExtra.X + 'px';
                            divJugador.style.top = casillaExtra.Y + 'px';
                            
                        }
                        //si fallamos restamos una casilla
                    } else {
                        console.log("Respuesta incorrecta");
                        if (jugador.casillaActual > 0) {
                            jugador.casillaActual--;
                            const casillaRetroceso = casillas[jugador.casillaActual];
                            divJugador.style.left = casillaRetroceso.X + 'px';
                            divJugador.style.top = casillaRetroceso.Y + 'px';
                        }
                    }
                });
            }

        }, 1200)



    }
}

