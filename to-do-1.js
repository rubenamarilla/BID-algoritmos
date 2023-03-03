// Configuración e intercambio
/* Pon myNumber en 42. Deja myName con tu nombre. 
Ahora intercambia myNumber por myName y viceversa. */
let myNumber = 42
let myName = "Ruben"
let change = myNumber
myNumber = myName
myName = change
console.log("My number is " + myNumber)
console.log("My name is " + myName)

// Imprimir -52 a 1066
// Imprime números enteros de -52 a 1066 usando un bucle FOR.
for (let i = -52; i <= 1066; i++) {
    console.log(i)
}

// No te preocupe, sé feliz
// Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.
function beCheerful(i) {
    console.log("¡buenos días! " + i)
}
for (let i = 1; i <= 98; i++) {
    beCheerful(i);
}

// Múltiplos de tres, pero no todos
// Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6.
for (let i = -300; i <= 0; i++) {
    if (i % 3 == 0) {
        if (i === -3 || i === -6) {
            continue
        } else {
            console.log(i)
        }
    }
}

// Imprimir enteros con While
// Imprime números enteros de 2000 a 5280, utilizando un WHILE.
let count = 2000
while (count <= 5280) {
    console.log(count)
    count++
}

// Dices que es tu cumpleaños...
// Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, 
// registra "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".
const cumpleaños = (dia, mes) => {
    if (dia == 19 && mes == 11) {
        console.log("¿Cómo lo supiste?")
    } else if (mes == 19 && dia == 11) {
        console.log("¿Cómo lo supiste?")
    } else {
        console.log("Un día cualquiera...")
    }
}
cumpleaños(11, 19)

// Año bisiesto
// Escribe una función que determine si un año determinado es bisiesto. 
// Si un año es divisible por cuatro, es un año bisiesto, 
// a menos que sea divisible por 100. Sin embargo, si es divisible por 400, entonces lo es.
function bisiesto(año) {
    if (año % 4 === 0 && año % 100 !== 0 || año % 400 === 0) {
        console.log(`${año} es bisiesto`)
    } else {
        console.log(`${año} no es bisiesto`)
    }
}
bisiesto(2004)

// Imprimir y contar
// Imprime todos los múltiplos enteros de 5, de 512 a 4096. 
// Después, también registra cuántos había.
let counter = 0
for (let i = 512; i <= 4096; i = i + 5) {
    if (i === 512) {
        continue
    }
    console.log(i)
    counter++
}
console.log(`Hay ${counter} multiplos de 5 desde 512 hasta 4096`)

// Múltiplos de seis
// Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
let contar = 6
while (contar <= 60000) {
    console.log(contar)
    contar = contar + 6
}

// Contando, a la manera del Dojo
// Imprime los números enteros del 1 al 100. Si es divisible por 5, 
// imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        if (i % 10 === 0) {
            console.log("Dojo")
        } else {
            console.log("Codificando")
        }
    } else {
        console.log(i)
    }
}

// ¿Qué sabes?
// Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.
function whatDoYouKnow(incoming) {
    console.log(incoming)
}
whatDoYouKnow("Hello Dojo")

// Guau, es enorme...
// Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
const itsHuge = () => {
    let number = 0
    for (let i = -300000; i <= 300000; i++) {
        if (i % 2 !== 0) {
            number = number + i
        }
    }
    console.log(number) // total es 0
}
itsHuge()

// Cuenta regresiva cada cuatro
// Registra números positivos a partir de 2016, 
// contando hacia atrás cada cuatro números (excluye 0), sin un bucle FOR.
const cuentaRegresiva = () => {
    let counter = 2016
    while (counter > 0) {
        console.log(counter)
        counter -= 4
    }
}
cuentaRegresiva()

// Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, dado lowNum, 
// highNum, mult, print múltiplos de mult desde highNum hasta lowNum, usando un FOR. 
// Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).
const cuentaRegresiva2 = (lowNum, highNum, mult) => {
    for (let i = highNum; i >= lowNum; i = i - mult) {
        console.log(i)
    }
}
cuentaRegresiva2(2, 9, 3)

// La cuenta regresiva final
// Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, 
// pero el problema es esencialmente idéntico; ¡no te dejes engañar! Dados 4 parámetros 
// (param1, param2, param3, param4), imprime los múltiplos de param1, comenzando en param2 y 
// extendiéndose hasta param3. Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). 
// Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos los múltiplos de 
// 3 entre 5 y 17, y excluyendo el valor 9).
const cuentaRegresiva3 = (param1, param2, param3, param4) => {
    counter = param2
    while (counter <= param3) {
        if (counter % param1 == 0) {
            if (counter == param4) {
                //no imprime
            } else {
                console.log(counter)
            }
        }
        counter++
    }
}
cuentaRegresiva3(3, 5, 17, 9)