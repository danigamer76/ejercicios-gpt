// ejercicio4.js

// 1. Declarar un array con 5 nombres de frutas
let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Mango"];

// 2. Usar un bucle 'for' para imprimir cada fruta en la consola
console.log("Usar un bucle 'for' para imprimir cada fruta en la consola");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 3. Usar un bucle 'while' para recorrer el array al revés y mostrar cada fruta
console.log("Usar un bucle 'while' para recorrer el array al revés y mostrar cada fruta");
let i = frutas.length - 1;
while (i >= 0) {
    console.log(frutas[i]);
    i--;
}