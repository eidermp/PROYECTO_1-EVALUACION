'use strict';
// Declaramos variable historial como un array donde se van a ir guardando los resultados de 
// las operaciones realizadas por el usuario.
let historial = [];

// Función principal de la calculadora donde nos dará 3 opciones
function menuCalculadora() {
    let opcion;
    do {
        // Muestra el menú de opciones y espera la entrada del usuario gracias al prompt.
        // Verifica la opción seleccionada usando una estructura `switch`
        opcion = prompt("Selecciona una opción:\n1. Realizar operación\n2. Ver historial\n3. Salir");
        switch (opcion) {
            case '1':
                // Si elige '1', se muestra el menú de operaciones(llamando a la función)
                menuOperaciones();
                break;
            case '2':
                // Si elige '2', se muestra el historial de operaciones(llamadno a la funcion)
                mostrarHistorial();
                break;
            case '3':
                // Si elige '3', se termina la calculadora y sale el mensaje por consola
                console.log("Saliendo de la calculadora.");
                break;
            default:
                // Si la opción no es válida, muestra un mensaje de error
                alert("Opción no válida, por favor selecciona una opción válida.");
        }
    } while (opcion !== '3'); // El menú se repite hasta que el usuario elija la opción '3' para salir
}

// Menú para seleccionar la operación
function menuOperaciones() {
    let operacion;
    do {
        // Muestra el sub-menú de operaciones y espera la entrada del usuario
        // Llama a la función correspondiente según la opción seleccionada(1-5 llama a la misma)
        operacion = prompt("Selecciona una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Raíz Cuadrada\n6. Volver al menú principal");
        switch (operacion) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                // Si se elige una operación válida, llama a la función calculadora
                calculadora(operacion);
                break;
            case '6':
                // Si elige '6', vuelve al menú principal
                return;
            default:
                // Si la opción no es válida, muestra un mensaje de error
                alert("Opción no válida, por favor selecciona una opción válida.");
        }
    } while (operacion !== '6'); // Repite el sub-menú hasta que el usuario elija volver al menú principal
}

// Función para realizar operaciones
function calculadora(operacion) {
    try {
        let num1, num2;
        
        // Verifica si la operación es raíz cuadrada
        if (operacion === '5') { // '5' indica la opción de raíz cuadrada
            // Solicita solo un número
            num1 = parseFloat(prompt("Introduce el número para la raíz cuadrada:"));

            // Verifica que el input sea válido(si es un numero o no)
            if (isNaN(num1)) {
                console.log("Por favor, introduce un número válido.");
                return;
            }

            // Realiza la operación de raíz cuadrada
            let resultado = realizarOperacion(num1,null,operacion);
            
            // Muestra el resultado y lo guarda en el historial
            if (resultado !== null) {
                console.log(`Resultado: ${resultado}`);
                historial.push({ operacion: obtenerNombreOperacion(operacion), num1: num1,num2:null, resultado: resultado });
            }
            
        } else {
            // Solicita dos números para las otras operaciones
            num1 = parseFloat(prompt("Introduce el primer número:"));
            num2 = parseFloat(prompt("Introduce el segundo número:"));

            // Verifica que ambos inputs sean válidos
            if (validarInput(num1, num2, operacion)) {
                // Realiza la operación seleccionada
                let resultado = realizarOperacion(num1, num2, operacion);

                // Muestra el resultado y lo guarda en el historial
                if (resultado !== null) {
                    console.log(`Resultado: ${resultado}`);
                    historial.push({ operacion: obtenerNombreOperacion(operacion), num1: num1, num2: num2, resultado: resultado });
                }
            }
        }
    } catch (error) {
        // Muestra el mensaje de error en caso de excepción
        console.log("Error en la operación: " + error.message);
    }
}


// Función para realizar la operación seleccionada
function realizarOperacion(num1, num2, operacion) {
    // Dependiendo de la opción seleccionada, realiza la operación correspondiente
    switch (operacion) {
        case '1': // Suma
            return num1 + num2;
        case '2': // Resta
            return num1 - num2;
        case '3': // Multiplicación
            return num1 * num2;
        case '4': // División
            // Si el divisor es 0, muestra un mensaje de error y retorna null
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                alert("Error: División entre 0 no permitida.");
                return null; // No se puede realizar la operación, se retorna null
            }
        case '5': // Raíz Cuadrada
            return Math.sqrt(num1); // Realiza la raíz cuadrada del primer número
        default:
            // Si la opción no es válida, muestra un mensaje de error
            alert("Operación no válida.");
            return null; // Retorna null si la operación no es válida
    }
}

// Función para validar los inputs
function validarInput(num1, num2, operacion) {
    // Verifica si los valores de los números son válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Por favor ingresa números válidos."); // Muestra un mensaje de error si los números no son válidos
        return false; // Retorna `false` si los inputs no son válidos
    }
    return true; // Retorna `true` si los inputs son válidos
}

// Función para obtener el nombre de la operación
function obtenerNombreOperacion(operacion) {
    // Devuelve el nombre de la operación en formato de símbolo
    switch (operacion) {
        case '1':
            return '+'; // Suma
        case '2':
            return '-'; // Resta
        case '3':
            return '*'; // Multiplicación
        case '4':
            return '/'; // División
        case '5':
            return 'Raíz Cuadrada'; // Raíz cuadrada
        default:
            return ''; // Si la opción no es válida, devuelve una cadena vacía
    }
}

// Función para mostrar el historial de operaciones
function mostrarHistorial() {
    // Muestra el historial de operaciones realizadas
    console.log("Historial de operaciones:");
    if (historial.length === 0) { 
        // Si el historial está vacío, muestra un mensaje
        console.log("No hay operaciones en el historial.");
    } else { 
        // Si hay operaciones en el historial, las muestra
        for (let calculo of historial) { 
            console.log(`${calculo.num1} ${calculo.operacion} ${calculo.num2} = ${calculo.resultado}`); 
        }// Recorre cada elemento (objeto) del array historial.
    }
}

// Inicia el menú de la calculadora al cargar el script
menuCalculadora();
