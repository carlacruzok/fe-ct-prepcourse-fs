/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
   // otra forma
   // var primerElemento = array.shift()
   // return primerElemento
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimo = array[array.length -1];
   return ultimo; // o return array[ultimo]
}
// return array[array.lenght -1];  

// otra forma
   // var primerElemento = array.pop()
   // return primerElemento

   // otra -> metodo AT devuelve el primer elemento y si le ponemos -1 devuelve el ultimo
   // var primerElemento = array.at(-1)
   // return primerElemento

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
        return array.map(i => 
        i + 1);
   }
// otra forma -> guardando en una variable 
//   var otroarray = array.map(elem => 
//       elem + 1);
//       return otroarray
 
   // otra forma
   // var nuevoArray _= [];
   // for (var i= 0; i<array.lenght; i++){
   //    nuevoArray.push(array[i] +1 );
   //}
   // return nuevoArray;

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento);
return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
   //otra forma
   // var string = palabras.join(' ')
   // return string
 }

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}
// for (var i=0; i<array.length; i++){
   // if (array[i] === elemento) return true)
//} return false;

// otra forma hacer con foreach
// var contiene = false
// array.forEach(element => {
//    if (element=== elemento) contiene= true
//    else contiene = false
// });
// return contiene


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   //otra opcion
   /*var suma = 0;
   for (var i=0; i < arrayOfNums.length; i++){
   suma += arrayOfNums[i];
   } return suma;*/
   return arrayOfNums.reduce(function(suma, elemento) { // es lo mismo que (suma, elemento) => {}
      return suma + elemento // suma= suma + elemento
})

// con metodo MAP
// var sum = 0
// arrayOfNums.map(num => {
//    sum = sum +num
// })
// return sum
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0, promedio = 0;
for (var i=0; i < resultadosTest.length; i++){
   suma += resultadosTest[i];
} promedio = suma / resultadosTest.length;
return promedio;
}
// usando la funcion del ejercicio anterior. Agregando una funcion dentro de otra
// return agregarNumeros(resultadosTest) / resultadosTest.length


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  for (var i = 0; i < arrayOfNums.length; i++){
   if (arrayOfNums[i] > arrayOfNums[i + 1]){
      return arrayOfNums[i]
   }
 } 
 //con metodo MATH.MAX
 // return math.max(...arrayOfNums) // usando como parametro REST

 //con FOREACH
//  var numeroMasGrande=arrayOfNums[0]
//  arrayOfNums.array.forEach(element => {
//    if(element > numeroMasGrande) numeroMasGrande = element
//  });
//  return numeroMasGrande

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var longitudDeArguments = arguments.length
   if (arguments.length === 0) return 0;
   if (longitudDeArguments ===1) return arguments[0]
   var producto = 1;
   for (var i=0; i<arguments.length; i++){
       producto = producto * arguments[i]
   } return producto;

   // con metodo REDUCE no se puede aplicar a arguments 

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
//    var cantidad = 0; 
//    for (var i=0; i<array.length; i++){
//       if (array[i]>18){
//          cantidad = cantidad + 1; // cantidad++
//       }
//   } return cantidad;

// con metodo FILTER 
var filtrados = array.filter (function(elem){
   return elem > 18
})
return filtrados.length
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia < 1 || numeroDeDia > 7) return "Numero invalido"
   if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
      else return "Es dia laboral"; // puede ir sin else
   }

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // tostring -> devuelve un string
   // charAt -> devuelve la posicion del caracter que le paso como argumento
num = num.toString()
// console.log(num.charAt(5))
// 

if (num.charAt(0) === '9') return true;
else return false;

// otra forma
// var numeroEnString = num.toString() // convierto a string
// primerValor = numeroEnString.at(0) // saco el primer valor
// var primerValor = Number(primerValor) // convierto a numero el primer valor para luego comparar
// return primerValor === 9

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
for (let i=1; i<array.length; i++){
   if (array[i] !== array[0]){
      return false;
   } 
} return true

// hacer con metodo EVERY()
// var numeroCualquiera = array[0]
// return array.every(function (elem){
//    return elem === numeroCualquiera
// })

// con foreach
// var numero = array[0]
// array.forEach(element => {
//    if (numero === element) return true;
//    return false
// });
}
 
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
   for (var i=0; i<array.length; i++){
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
         meses.push(array[i]);
      } 
   }  if (meses.length === 0){
   return "No se encontraron los meses pedidos"
   } else
    for (var j=0; j< meses.length; j++) {
      if (meses.includes('Enero', 'Marzo', 'Noviembre')){
         return meses;
      } return "No se encontraron los meses pedidos"
   } return meses; 

   // COMPLETAR averiguar metodo SET
   // var filtrados = array.filter(function(elem){
   //    if (elem === 'Enero'|| elem === "Marzo" || elem === "Noviembre") return elem
   // })
   // if (mesesfiltrados.length < 3) return "No se encontraron los meses pedidos"
   // return filtrados
   // var conjunto = new Set(mesesfiltrados)
   // var arregloEmpaquetado=[...conjunto]
   // if (arregloEmpaquetado.length < 3)
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDelSeis = [];
   for (let i=0; i<11; i++){
      tablaDelSeis.push(i * 6);
   } return tablaDelSeis;
  }

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayores = [];
   for (var i=0; i < array.length; i++){
      if (array[i]>100)
         mayores.push(array[i]);
   } return mayores;
   }
   // funcion filter -> recorre el array y filtra los elementos que cumpla con la condicion
// var nuevoArray = array.filter(elemento => elemento > 100)
// return nuevoArray

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
  for ( var i= 0; i<10; i++){
   num = num + 2;
      if (num === i) {
         break;
       } else {
         array.push(num);
       }
   } if (i<10){
      return "Se interrumpió la ejecución"
   } else {
      return array
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   var suma = num;
    for ( var i= 0; i<10; i++){
      if (i+1 === 5) {
         continue;
       } else {
         suma = suma+2;
         array.push(suma);
       }
   } return array;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
