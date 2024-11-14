# Calculadora Interactiva en JavaScript

## Descripción
Esta aplicación es una calculadora interactiva desarrollada en JavaScript que permite realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y raíz cuadrada. Además, la calculadora mantiene un historial de operaciones realizadas, mostrando los detalles de cada cálculo.

Este proyecto está diseñado para ejecutarse en la consola, sin interfaz gráfica, la validación de entradas, y el manejo de errores. 

## Funcionalidad
La calculadora cuenta con las siguientes funcionalidades:

1. **Menú Interactivo**: Un menú que permite al usuario seleccionar la operación deseada.
2. **Operaciones Matemáticas**:
   - **Suma**
   - **Resta**
   - **Multiplicación**
   - **División**
   - **Raíz Cuadrada**: Esta operación solo requiere un número.
3. **Historial de Operaciones**: Un historial que almacena cada operación realizada junto con sus operandos y resultado.
4. **Validación de Entradas**: Verificación de que las entradas del usuario sean números válidos y manejo especial de la división por cero.
5. **Manejo de Errores**: Uso de bloques `try-catch` para capturar y gestionar errores inesperados.

## Estructura del Código
La aplicación está organizada en varias funciones para una mayor modularidad:

- **menuCalculadora()**: Controla el menú principal y guía al usuario para seleccionar la operación o ver el historial.
- **menuOperaciones()**: Muestra las opciones de operaciones al usuario.
- **calculadora()**: Valida las entradas del usuario y ejecuta la operación seleccionada.
- **realizarOperacion()**: Lleva a cabo la operación matemática en función de la selección del usuario.
- **mostrarHistorial()**: Muestra el historial de operaciones realizadas en la consola.

Cada función tiene una responsabilidad específica, lo que permite un código más claro. 

## Gestión del Historial
El historial de operaciones se almacena en un array de objetos. Cada objeto contiene los siguientes campos:
- **tipo**: Tipo de operación realizada (suma, resta, multiplicación, división, raíz cuadrada).
- **operandos**: Números utilizados en la operación.
- **resultado**: Resultado de la operación.

