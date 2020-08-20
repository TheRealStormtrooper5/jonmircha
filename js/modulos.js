/*import saludar,{PI} from "/jonmircha/js/constantes.js";
import {aritmetica} from "/jonmircha/js/aritmetica.js";
console.log(PI);

console.log(aritmetica.restar(5,5))

saludar();
*/


function contarCaracteres(cadena){
    if (typeof cadena === "string") {
        let comprobar = cadena.length;
        console.log(`La cadena de texto tiene ${comprobar} digitos contando espacios`);
    }else{
        console.log('Por favor, Introduzca datos de cadena de texto');
    }
}

contarCaracteres('hogar');
//Fin del primer ejercicio exitosamente

function cortarCaracteres(texto_a_recortar){
    let cortar = texto_a_recortar.substring(0,5);
    return cortar;
}
console.log(cortarCaracteres('hola mundo'));

//devuelve solo hola.

//Fin del segundo ejercicio Exitosamente

function convertidor_Cadenas_A_Arreglos (texto_a_convertir, separador){
    let convertidor = texto_a_convertir.split(separador, 3);
    console.log(convertidor);
}

convertidor_Cadenas_A_Arreglos('Hola Mundo', ' ');

//devolvio ["Hola", "Mundo"]
// Fin del tercer ejercicio Exitosamente

function repetidorTextos(texto, cantidadDeVeces){

    for(let i = 0; i <= cantidadDeVeces; i++){
        console.log(texto);
    }
}
repetidorTextos('Hola mundo', 15);

//devuelve el dato 

//fin del cuarto ejercicio Exitosamente


console.groupCollapsed('Parte 2');
console.log('Aca no hay nada.');
console.groupEnd();


//inicio 2

function invertir (nombre){

let invertir = nombre.split("").reverse().join("");
    
return invertir;



}

console.log(invertir('Hola' + ''));


//fin de el ejercicio 5 


function contador (texto, buscar){
    let arreglo = texto.split(" ");
    let cont = 0;

    for(let i = 0; i < texto.length; i++){
        if(arreglo[i] == buscar){
            cont = cont + 1;
        }
    }
    console.log(buscar + " veces " + cont);

}

contador('youtube youtube hola mundo mundo', 'youtube');

//fin del ejercicio 6


function polindromo (palabra){
    let polindromo = palabra.split("").reverse().join("");
    

    if(palabra == polindromo){
        console.log('se lee al derecho y alreves');
    }else{
        console.log('No se puede leer alreves');
    }
}

polindromo('sisis');

//fin del ejercicio 7


function deleteText(texto, textoAEliminar) {
    var arreglo = texto.split(",");
    var nuevoTexto = "";
    for (let i = 0; i < arreglo.length; i++) {
      nuevoTexto += arreglo[i].replace(textoAEliminar, "");
    }
    console.log(nuevoTexto);
  }
  deleteText("xyz1 , xyz2 , xyz3 , xyz4 , xyz5", "xyz");


  console.groupCollapsed('Parte 3');
  console.log('Aca no hay nada.');
  console.groupEnd();
  


  function random (valor1 = "", valor2 = ""){

    if(typeof valor1 === "string" || typeof valor2 === "string"){
        console.error('Valores no son de tipo numero');
        return false;
    }

    let aleatorio = Math.round(Math.random()*(valor2 - valor1) + valor1);

      console.log(`${aleatorio}`, 'Es el valor aleatorio entres 500 y 600');
  }

  random(500,600);


  const capicua = numerooo=> {

    numerooo = numerooo.toString();

    let alreves = numerooo.split("").reverse().join("");


    if(alreves === numerooo){
        console.log('Es capicua');
    }else{
        console.log('No es capicua');
    }


  }

  capicua(202);

  ///////////////

  const factorial = (dato = "") => {
    let total = 1;

	for ( let i = dato; i > 0; i--) {
        
		total *= i;
	}
	return console.info( `El numero factorial de ${dato} es igual a ${total} ` );
};
  
factorial(5);


//////////////////////

const grados = (grado, tipo) =>{

if(typeof grado === "number" && tipo === "C"){

    let formula = (grado * 9)/5+32;

    console.log('℃' + grado + ' Es igual a ' + "℉ " +formula );

}else if (typeof grado === "number" && tipo === "F"){
    
let formula2 = (grado - 32)*5;

let continuacion = formula2/9;

console.log('℉' + grado + ' Es igual a ' + "℃" + continuacion );

}else{
    console.warn('Dato no correcto');
}

}

grados(0, "C");

//////////////////////////////////////////////

const descuento = (monto, descuento) => {

   let formula = (monto * descuento) / 100;
   let formulaD = (formula * 100) /monto;
   let montoFinal = monto - formula;
    console.log(`${formula}` + 'Es el descuento en dolares del producto PS5');
    console.log(`${formulaD}` + '% Es el descuento en porcentaje del producto PS5');
    console.log(montoFinal +'Es el monto final despues del descuento');



}

descuento(250,15);


const fecha= (año) => {

    let fecha = new Date();
    let anio = fecha.getFullYear();
    if(año < anio){
        let formula = anio - año;
        console.log(`Hay ${formula} años de diferencia`);
    }else{
        let formula =  año - anio ;
        console.log('Hay '+formula + ' años de diferencia');
    }

}
fecha(1550);

const contarLetras = (cadena = "") => {

    let vocales = 0;
    let consonantes = 0;

for (let letra of cadena) {
    if(/[AEIOUáéíóúÁÉÍÓÚaeiou]/.test(letra)){
        vocales++;
    }
    if(/[qwrtypsdfghjklñzxcvbnmñ]/.test(letra)){
        consonantes++;
    }
}

return console.info({
    vocales: vocales,
    consonantes: consonantes,
    cadena: cadena
})
}

contarLetras('hola mundo');

///////////////////////////

const validarNombre = (nombre = " ") => {
        
        let expReg = /^[(A-ZÑÁÉÍÓÚÜ)\s]+$/gi.test(nombre)
        if(expReg){
            console.info(nombre + "es valido") 
        }else{
            console.warn(nombre + " no es valido")
        }

    }

validarNombre('pedro ');
//^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

const validarEmail = (email = " ") => {
        
    let expReg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    if(expReg){
        console.info(`${email} es valido`) 
    }else{
        console.warn(`${email} no es valido`)
    }

}
validarEmail("andres@outlook.com");

const potenciacion = (cuadro, exponente) => {

if(typeof cuadro === "number" && typeof exponente === "number"){
    let formula = Math.pow(cuadro, exponente);

    return console.log(formula + " el numero " + cuadro + " Ha sido multiplicado por si mismo " + exponente + " veces");
}else{
    console.warn('Parametros invalidos');
}
}

potenciacion(5, 3);

////////////////////////////////////////////

const devolverCuadrado = (arr = undefined) => {
    if(arr === undefined) return console.warn('No introdujiste nada');
    if(!(arr instanceof Array))return console.error('No es un array');
    if(arr.length === 0)return console.error('El arreglo esta vacio');

    for (let num of arr) {
        if(typeof num !== "number"){

            return console.warn(`el dato ${num} \n No es un digito de tipo numerico valido`);

        }
    }

    const newArr = arr.map(el => el*el);

    return console.info(`El numero al cuadrado es igual a ${newArr}`);
}

devolverCuadrado([10]);


///////////////////////////////////////////////////

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn('No introdujiste nada');
    if(!(arr instanceof Array))return console.error('No es un array');
    if(arr.length === 0)return console.error('El arreglo esta vacio');

    for (let num of arr) {
        if(typeof num !== "number"){

            return console.warn(`el dato ${num} \n No es un digito de tipo numerico valido`);

        }
    }


    return console.log(`Arreglo original ${arr} \n arreglo mayor: ${Math.max(...arr)} \n y el valor mennor: ${Math.min(...arr)}`);
}

arrayMinMax([4,5,6,15,1]);

//////////////////////////

const parinpares = (arr = undefined) => {
    if(arr === undefined) return console.warn('No introdujiste nada');
    if(!(arr instanceof Array))return console.error('No es un array');
    if(arr.length === 0)return console.error('El arreglo esta vacio');

    for (let num of arr) {
        if(typeof num !== "number"){

            return console.warn(`el dato ${num} \n No es un digito de tipo numerico valido`);

        }
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        inpares: arr.filter(num => num % 2 === 1),

    })
}

parinpares([5,3,4,5,6,4,8,6,7,1,8,12]);

const ordenar = (arr = undefined)=>{
    if(arr === undefined) return console.warn('No introdujiste nada');
    if(!(arr instanceof Array))return console.error('No es un array');
    if(arr.length === 0)return console.error('El arreglo esta vacio');

    for (let num of arr) {
        if(typeof num !== "number"){

            return console.warn(`el dato ${num} \n No es un digito de tipo numerico valido`);

        }
    }
//console.log(unicos + [...unicos]);
let asc = arr.map(el => el).sort();


return console.log({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse(),
    unicos: new Set(asc),
    
});


}

ordenar([5,8,9,7,6,6,6]);

//////////////////////////////

const quitarDuplicados = (arr) => {

    if(arr === undefined) return console.warn('No introdujiste nada');
    if(!(arr instanceof Array))return console.error('No es un array');
    if(arr.length === 0)return console.error('El arreglo esta vacio');

  

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((valor, posicion, yomismo) => yomismo.indexOf(valor) === posicion)
    });
}

quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//////////////////////////////////////////////////////////

