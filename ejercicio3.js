// Escribir una función llamada contrasenaValida que reciba 
// un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
// De lo contrario debe retornar false.

function contrasenaValida(String){
    if (String === "2Fj(jjbFsuj" || String === "eoZiugBf&g9"){
        return true
    }else {
        return false
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false