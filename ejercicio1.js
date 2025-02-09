/** Variables en JavaScript
    Las variables son como cajas donde guardamos información
 * 
 *  let nombre = "Carlos";
    let edad = 25;

    console.log(nombre); // Muestra: Carlos
    console.log(edad);   // Muestra: 25

    Hay tres formas de declarar variables:

    let → Se puede cambiar su valor.
    const → No se puede cambiar su valor.
    var → (No se recomienda usar, es una forma antigua).

 */

/** Operacion basicas con JavaScript
    Podemos hacer sumas, restas, multiplicaciones y divisiones:
 * 
 *  let suma = 5 + 5;
    let resta = 5 - 5;
    let multiplicacion = 5 * 5;
    let division = 5 / 5;

    console.log(suma);          // Muestra: 10
    console.log(resta);         // Muestra: 0
    console.log(multiplicacion); // Muestra: 25
    console.log(division);       // Muestra: 1
 *
 *  También podemos unir textos (concatenar):
 *  let saludo = "Hola, " + nombre + "!";
    console.log(saludo); 
 */

    /**
     * Declara variables para:
         Tu nombre
         Tu edad
         Tu país

     * Muestra las variables en consola
       Hola, mi nombre es [tu nombre], tengo [tu edad] años y soy de [tu país].
     */
let nombre = "Daniel"
let edad = 27
let pais = "España"
console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y soy de " + pais + ".")