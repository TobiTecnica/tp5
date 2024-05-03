function generarVectorAleatorio(N) {
    var vector = [];
    for (var i = 0; i < N; i++) {
        vector.push(Math.floor(Math.random() * 10));
    }
    return vector;
}

// Función para calcular el promedio de los elementos del vector
function calcularPromedio(vector) {
    var suma = vector.reduce((a, b) => a + b, 0);
    return suma / vector.length;
}

// Función para generar un vector con los elementos mayores al promedio del vector original
function generarVectorMayorAlPromedio(vector, promedio) {
    return vector.filter(num => num > promedio);
}

// Función para contar la cantidad de elementos que son múltiplos a la vez de 2 y 3
function contarMultiplosDosTres(vector) {
    var multidos = vector.filter(num => num % 2 === 0 ).length;
    var multitres = vector.filter(num => num % 3 === 0 ).length;
    var total = multidos + multitres;
    return total;
}

// Función para calcular la suma de todos los elementos del vector
function calcularSuma(vector) {
    return vector.reduce((a, b) => a + b, 0);
}

// Función para generar un vector con los elementos del vector original multiplicados por 2
function generarVectorMultiplicadoPorDos(vector) {
    return vector.map(num => num * 2);
}

// Función para mostrar los resultados y los vectores
function mostrarResultados(vectorA, vectorB, vectorC, promedioA, cantidadMultiplosDosTresB, sumaTotalA) {
    console.log("Vector A:", vectorA);
    console.log("Vector B:", vectorB);
    console.log("Vector C:", vectorC);
    console.log("Promedio de los elementos del vector A:", promedioA);
    console.log("Cantidad de elementos que son múltiplos de 2 y 3 en el vector B:", cantidadMultiplosDosTresB);
    console.log("Suma total de todos los elementos del vector A:", sumaTotalA);
}

// Solicitar al usuario el tamaño del vector
var N = parseInt(prompt("Ingrese la cantidad de elementos del vector:"));

// Generar el vector A
var vectorA = generarVectorAleatorio(N);

// Calcular el promedio de los elementos del vector A
var promedioA = calcularPromedio(vectorA);

// Generar el vector B con los elementos mayores al promedio del vector A
var vectorB = generarVectorMayorAlPromedio(vectorA, promedioA);

// Contar la cantidad de elementos que son múltiplos de 2 y 3 en el vector B
var cantidadMultiplosDosTresB = contarMultiplosDosTres(vectorB);

// Calcular la suma de todos los elementos del vector A
var sumaTotalA = calcularSuma(vectorA);

// Generar el vector C con los elementos del vector A multiplicados por 2
var vectorC = generarVectorMultiplicadoPorDos(vectorA);

// Mostrar los resultados
mostrarResultados(vectorA, vectorB, vectorC, promedioA, cantidadMultiplosDosTresB, sumaTotalA);