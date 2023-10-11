/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

const { crearUsuario } = require("./Ejercicio 01");

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
      constructor(nombre, apellido, edad, domicilio){
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad = edad;
         this.domicilio = domicilio;
      }detalle () {
         return {
               nombre: this.nombre, 
               apellido: this.apellido,
               edad: this.edad,
               domicilio: this.domicilio} 
      }
   }
//var persona1 = new Persona('Nina', 'Garcia', 18, 'calle123')
//console.log(persona1) muestra Persona {
  // nombre: 'Nina',
   //apellido: 'Garcia',
   //edad: 18,
   //domicilio: 'calle123'
 //}
//console.log(persona1.detalle()); // muestra { nombre: 'Nina', apellido: 'Garcia', edad: 18, domicilio: 'calle123' }

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   var persona= new Persona(nombre, apellido, edad, domicilio) // tenemos que pasar lo que recibe la funcion, para que cuando invoquemos a la fcion
   // crearinstanciaPersona, lo que recibira la instancia persona, recibira esos argmuentos.
   //var nuevo = new Persona('Carla', 'Cruz', 37, 'Victoria Ocampo 123') // pasamos los argumentos
   return persona
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function(){
    return this.nombre + ', '  + this.edad + ' años'
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
