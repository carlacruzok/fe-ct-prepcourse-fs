/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = Object.entries(objeto) // transforma en una matriz, (1er elemento la clave, 2do elemento el valor)
   //console.log(array);
   return array;
  }
  //deObjetoAarray({x:10, y:25})

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};
   for (var i = 0; i < string.length; i++){ // en cada letra
      if (!obj[string[i]]){ // pregunta si la letra esta creada como clave en mi objeto
         obj[string[i]] = 0 // si no esta la creamos e inicializamos en cero
      }
       obj[string[i]]++ // si ya existe, la incrementamos
   } // aqui ya tenemos nuestro objeto con las claves:valor pero sin ordenar
   //console.log(obj);
   // ordenar claves va a ser un arreglo de las claves
   var ordenarClaves = Object.keys(obj).sort() // SORT permite ordenar 
   var objOrdenado={} // creamos un obj vacio
   for (var i=0; i< ordenarClaves.length; i++){ // recorremos el array de claves
      objOrdenado[ordenarClaves[i]] = obj[ordenarClaves[i]] // creamos la propiedad y guardamos el valor de la clave
   }
   //console.log(objOrdenado)
   return objOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var str1 = '';
   var str2 = '';
   for (var i= 0; i< string.length; i++){
      // validamos cada letra. 
      if (string[i] === string[i].toUpperCase()) {//Si la letra que iteramos es igual a la misma letra iterando, pero aplicando el metodo de los string que convierte a mayus
            str1 = str1 + string[i]
      } else {
         str2 = str2 + string[i]
      }
   } return str1 + str2
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // para resolver de otro modo
   // resolver con metodo split, luego reverse de los arrays y el metodo join
   // split() un string de toda la frase en un arreglo
   // split('') cada letra en un arreglo
   // split(' ') la frase convertida en arreglo por cada espacio que encuentre

   const seppalabra = frase.split(' ')
   // console.log(seppalabra)
   for (var i = 0; i < seppalabra.length; i++){
      seppalabra[i] = seppalabra[i].split('').reverse().join('')
   } //console.log(seppalabras.join(''))
   return seppalabra.join(' ')

   // var frasePalabra = frase.split(' ') // separa la frase en palabras en un array, la condicion es el espacio para separar
   // var nuevaPalabra = [];
   // for (var i= 0; i< frasePalabra.length; i++){
   //    var palabraInvertida = "";
   //    for (var j = frasePalabra[i].length - 1; j >= 0; j--){
   //       palabraInvertida += frasePalabra[i][j];
   //    }
   //    nuevaPalabra.push(palabraInvertida);
   //   }
   //   return nuevaPalabra.join(' ');
 }

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString() // lo convierte a string ej: '123'
   var numInvertido = '';
  for (var i = num.length - 1 ; i >=0 ; i--){
   numInvertido += num[i]
  }
  numInvertido = parseInt(numInvertido) // convierte el string a numero entero 
  if (numero === numInvertido) return 'Es capicua';
  else return 'No es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = '';
   for (var i = 0; i < string.length; i++){
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
         nuevoString += string[i]
      }
   }
   return nuevoString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // SORT pasamos argumentos a y b para comparar cada elemento
   var nuevoArray = arrayOfStrings.sort(function(a,b){
      return a.length - b.length // compara la longitud de las palabras de cada array, si es 0 no pasa nada
   })
   return nuevoArray
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = []
   for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++){
         if(array1[i] === array2[j]){
            nuevoArray.push(array1[i])
         }
      }
   }
   return nuevoArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
