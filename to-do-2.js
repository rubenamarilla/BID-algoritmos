// Cuenta regresiva
// Crea una función que acepte un número como entrada.
// Devuelve un nuevo arreglo que cuenta de uno en uno,
// desde el número (como elemento "cero" del arreglo) hasta 0 (como último elemento).
// ¿Cuánto mide este arreglo?
function contarDesde(numero) {
    let resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    console.log("Este arreglo mide " + resultado.length);
    return resultado;
}
let resultado = contarDesde(5);
console.log(resultado);

// Imprimir y retorno
// Tu función recibirá un arreglo con dos números.
// Imprime el primer valor y devuelve el segundo.
function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}
resultado = printAndReturn([45, 22]);

// Primero más length
// Dado un arreglo, devuelve la suma del primer valor del arreglo,
// más la longitud del arreglo. ¿Qué sucede si el primer valor del
// arreglo no es un número, sino una cadena (como “what?”) o un booleano (como false).
function firstPlusLength(arr) {
    return arr[0] + arr.length;
}
resultado = firstPlusLength([10, 10]);
console.log(resultado);

// Valores mayores que el segundo
// Para [1,3,5,7,9,13], imprime valores que sean mayores que su segundo valor.
// Devuelve cuántos valores son.
function greaterThanSecond(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            console.log(array[i]);
            suma++;
        }
    }
    return suma;
}
resultado = greaterThanSecond([1, 3, 5, 7, 9, 13]);
console.log(resultado);

// Valores mayores que el segundo, generalizados
// Escribe una función que acepte cualquier arreglo y devuelva un
// nuevo arreglo con los valores del arreglo que sean mayores que su
// segundo valor. Imprime cuántos valores son. ¿Qué harás si el arreglo tiene solo un elemento?
function greaterThan2nd(array) {
    let arreglo = [];
    let suma = 0;
    if (array.length === 1) {
        console.log("El arreglo debe tener al menos 2 valores");
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[1]) {
                arreglo.push(array[i]);
                suma++;
            }
        }
        console.log(suma);
    }
    return arreglo;
}
resultado = greaterThan2nd([10, 2, 1, 8, 5]);
console.log(resultado);

// Esta longitud, ese valor
// Dados dos números, devuelve un arreglo de longitud num1 con
// cada valor num2. Imprimir "¡Jinx!" si son iguales.
function given2Numbers(num1, num2) {
    let array = [];
    if (num1 === num2) {
        console.log("¡Jinx!");
    } else {
        for (let i = 0; i < num1; i++) {
            array.push(num2);
        }
    }
    return array
}
console.log(given2Numbers(5, 2))

// Ajustar el primer valor
// Tu función debería aceptar un arreglo. Si el valor en [0] es 
// mayor que la longitud de; arreglo, imprime "¡Demasiado grande!"; 
// si el valor en [0] es menor que la longitud del arreglo, imprime 
// "¡Demasiado pequeño!"; de lo contrario, imprime "¡Perfecto!".
function adjustFirstValue(array) {
    if (array[0] > array.length) {
        console.log("¡Demasiado grande!")
    } else if (array[0] < array.length) {
        console.log("¡Demasiado pequeño!")
    } else {
        console.log("¡Perfecto!")
    }
}
adjustFirstValue([4, 2, 2])

// Fahrenheit a Celsius
// Kelvin quiere convertir entre escalas de temperatura. 
// Crea fahrenheitToCelsius(fDegrees) que acepte un número 
// de grados en Fahrenheit y devuelva la temperatura equivalente 
// expresada en grados Celsius. Para revisar, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5/9
}
console.log(fahrenheitToCelsius(95))

// Celsius a Fahrenheit
// Crea celsiusToFahrenheit(cDegrees) que acepte el número de grados 
// Celsius y devuelva la temperatura equivalente expresada en grados Fahrenheit.
function celsiusToFahrenheit(cDegrees) {
    return (9/5 * cDegrees) + 32
}
console.log(celsiusToFahrenheit(35))

// (Opcional): ¿Los valores Fahrenheit y Celsius son iguales en un cierto número?
// El cálculo científico puede ser complejo, por lo que para este desafío solo 
// prueba una serie de valores enteros Celsius comenzando en 200, yendo hacia 
// abajo (descendente), verificando si es igual al valor Fahrenheit correspondiente.
function areTheyEqual(num) {
    for (let i = 200; i >= num; i--) {
        if ((9/5 * i) + 32 === (i - 32) * 5/9) {
            console.log("Son iguales a los " + i + "°")
        }
    }
}
areTheyEqual(-50)