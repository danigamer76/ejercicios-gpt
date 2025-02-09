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

## 🛠️ Reto para hoy
1. Crea un archivo `ejercicio1.js`.
2. Declara variables para:
   - Tu nombre
   - Tu edad
   - Tu país
3. Muestra un mensaje en la consola con este formato:
   ```
   Hola, mi nombre es [tu nombre], tengo [tu edad] años y soy de [tu país].
   ```

### 💡 Pista
Usa `console.log()` y el operador `+` para unir textos.

Cuando termines, súbelo a **GitHub**. ✅

