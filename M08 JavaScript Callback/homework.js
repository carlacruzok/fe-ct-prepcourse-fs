/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //console.log(nombre);
   var nombreMayus = '';
   var primeraLetra = nombre.charAt(0).toUpperCase() // convierte a mayuscula
   //console.log(primeraLetra)
   for (var i=1; i<nombre.length; i++){
      nombreMayus = nombreMayus + nombre[i] 
   }
   //console.log(nombreMayus);
   nombre = primeraLetra + nombreMayus;
   //console.log(nombre);
   return nombre
}
//otra forma-------
// var letra=nombre.charAt(0).toUpperCase();
// const resto= nombre.slice(1) // el resto de la palabra o guarda en resto
//var completo= letra + resto
//return completo

//mayuscula('carla')

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(invocarCallback); // o simplemente cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   // otra forma
   // return cb (num1, num2)
   return cb(num1, num2, operacionMatematica);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
var resultado = arrayOfNumbers.reduce(function(suma, num){
   return suma = suma + num;
}, 0)
   cb(resultado);
}
// tambien se puede hacer con for

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

// otra forma
// array.forEach(cb);

   for(var i=0; i<array.length; i++){
      cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
// otra forma
//var nuevo = []
//for(var i=0; i<array.length; i++){
  // nuevo.push(cb(array[i]))
//}
//return nuevo

   var nuevo = array.map(function(elemento){
      return cb(elemento);
   });
   return nuevo;
 }

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevo = [];
   for (var i=0; i<arrayOfStrings.length; i++){
      if (arrayOfStrings[i][0] === 'a'){
       nuevo.push(arrayOfStrings[i])
      }
   }
   return nuevo

   //otra opcion con metodo filter
   //var nuevo=arrayOfStrings.filter(function(elemento){
     // return elemento[0] === 'a'  
   //})
   //return nuevo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
