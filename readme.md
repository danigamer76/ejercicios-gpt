# Introducción a JavaScript

## 📚 Qué es JavaScript
JavaScript es un lenguaje de programación utilizado para crear páginas web interactivas y también para desarrollar servidores con Node.js. Es flexible, fácil de aprender y muy popular en el mundo del desarrollo web.

---

## 📌 Variables en JavaScript
Las **variables** son espacios en la memoria donde podemos almacenar datos. En JavaScript, hay tres maneras de declarar variables:

### 📈 Tipos de Variables
```js
let nombre = "Carlos"; // Puede cambiar de valor
const PI = 3.1416; // No puede cambiar de valor
var edad = 25; // Forma antigua, no recomendada
```

### 🔧 Ejemplo:
```js
let nombre = "Carlos";
let edad = 25;
const pais = "México";

console.log(nombre); // Carlos
console.log(edad);   // 25
console.log(pais);   // México
```

---

## 💪 Operaciones Básicas en JavaScript
Podemos realizar operaciones matemáticas básicas:

```js
let a = 10;
let b = 5;

console.log("Suma:", a + b);          // 15
console.log("Resta:", a - b);         // 5
console.log("Multiplicación:", a * b); // 50
console.log("División:", a / b);     // 2
```

También podemos **unir textos (concatenación)**:
```js
let saludo = "Hola, " + nombre + "!";
console.log(saludo); // Hola, Carlos!
```

---

## 📅 Día 2: Tipos de Datos y Estructuras Básicas en JavaScript

## 📚 Tipos de Datos en JavaScript

En JavaScript, existen dos grandes categorías de tipos de datos:

## 📊 Primitivos (almacenan un solo valor)

```js
let nombre = "Carlos"; // String (Texto)
let edad = 25; // Number (Números enteros o decimales)
let esMayor = true; // Boolean (Verdadero o falso)
let vacio = null; // Null (Valor nulo o vacío)
let sinValor; // Undefined (Variable sin valor asignado)
```

## 🔧 Estructuras de Datos (Para agrupar información)

## 📈 Arrays (Listas de datos ordenados)

```js
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // "Manzana"
console.log(frutas.length); // 3
```

## 🔧 Objetos (Datos estructurados con clave-valor)

```js
let persona = {
  nombre: "Carlos",
  edad: 25,
  esEstudiante: true
};

console.log(persona.nombre); // "Carlos"
console.log(persona["edad"]); // 25
```


## 🔍 Estructuras de Control: Condicional if

Las estructuras de control nos permiten ejecutar diferentes bloques de código según condiciones específicas. Una de las más utilizadas es if.

## 📌 Sintaxis básica

```js
if (condición) {
  // Código que se ejecuta si la condición es verdadera
} else if (otraCondición) {
  // Código si se cumple otra condición
} else {
  // Código si ninguna de las condiciones anteriores se cumple
}
```

## 🔧 Ejemplo:

```js
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}
```

## ⚡ Uso con múltiples condiciones

Podemos evaluar más condiciones con else if:

```js
let temperatura = 30;

if (temperatura > 30) {
  console.log("Hace mucho calor.");
} else if (temperatura >= 20) {
  console.log("El clima es agradable.");
} else {
  console.log("Hace frío.");
}
```

## 📌 Nota: Las condiciones se evalúan en orden, de arriba hacia abajo. Cuando una se cumple, el resto se ignora.

# 📅 Día 3: Bucles en JavaScript

Los **bucles** nos permiten ejecutar un bloque de código varias veces sin necesidad de escribirlo repetidamente. En JavaScript, los bucles más usados son:

## 🔁 Bucle `for`
Se usa cuando sabemos cuántas veces queremos repetir una acción.

### 📌 Sintaxis básica:
```js
for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}
```

### 🔧 Ejemplo:
```js
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}
```

## 🔁 Bucle `while`
Ejecuta el código **mientras la condición sea verdadera**.

### 📌 Ejemplo:
```js
let contador = 1;
while (contador <= 5) {
  console.log("Contador:", contador);
  contador++;
}
```

## 🔁 Bucle `do...while`
Primero ejecuta el código y luego verifica la condición.

### 📌 Ejemplo:
```js
let numero = 1;
do {
  console.log("Número:", numero);
  numero++;
} while (numero <= 5);
```

---

