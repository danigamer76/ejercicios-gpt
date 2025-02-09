// 🎯 Ejercicio Día 2: Tipos de Datos y Estructuras en JavaScript
// 1. Declara variables con los siguientes tipos de datos:
//    - Un string con tu nombre
//    - Un número con tu edad
//    - Un booleano que indique si eres estudiante
//    - Un array con tus lenguajes de programación favoritos
//    - Un objeto con información sobre ti (nombre, edad, país)
// 2. Muestra cada dato en la consola con console.log()
// 💡 Ejemplo de salida esperada:
//      Mi nombre es Juan, tengo 30 años.
//      ¿Soy estudiante? true
//      Mis lenguajes favoritos son: JavaScript, Python, C++
//      Información: { nombre: "Juan", edad: 30, país: "México" }

let nombre = "Daniel"
let edad = 27
let estudiante = false
let lenguajes = ["JavaScript", "Java", "Kotlin"]
let info = {
    nombre: "Daniel",
    edad: 27,
    pais: "España"
}
console.log("Mi nombre es " + nombre + ", tengo " + edad + " años.")
console.log("¿Soy estudiante? " + estudiante)
console.log("Mis lenguajes favoritos son: " + lenguajes.join(", "))
console.log("Información: " + info.nombre + ", " + info.edad + ", " + info.pais)