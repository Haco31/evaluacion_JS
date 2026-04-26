// 1. Un estudiante realiza 4 exámenes, calcular el promedio de estos.
/*const examen1 = 12;
const examen2 = 15;
const examen3 = 18;
const examen4 = 10;

const suma = examen1 + examen2 + examen3 + examen4;
console.log(suma / 4);*/

//2. Calcular el área de un rectángulo
/*const base = 10;
const altura = 5;
const area = base * altura;
console.log(area)*/

//3. Calcular el área de un triángulo.
/*const base = 20;
const altura = 12;
const area = (base * altura) / 2;
console.log(area)*/

//4. Calcular el área de una circunferencia. (π = 3.14)
/*const radio = 5;
const area = 3.14 * radio * radio;
console.log(area)*/

//5. Haya el promedio de todos los elementos del arreglo.
/* const arreglo = [21, 4, 93, 33]
const suma = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3]
const promedio = suma / arreglo.length
console.log(promedio)*/

//6. De un arreglo de números, retornar la suma de todos los números pares.
/* const arreglo = [1, 4, 13, 22, 40, 5]
let sumaPares = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        sumaPares += arreglo[i];
    }
}
console.log(sumaPares);*/

//7. Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”
/*const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        Status: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        Status: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        Status: false,
    }
];

for (let i = 0; i < library.length; i++) {
    if (library[i].Status === true) {
        console.log(library[i].author + " " + library[i].title);
    }
}*/

//8. Crear un programa que tome dos arreglos de números y que retorne un booleano,unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

/*const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [6, 7, 8, 9, 10];
const arregloNuevo = arreglo1.concat(arreglo2);
console.log(arregloNuevo)
console.log(arregloNuevo.length >= 10);*/

//9. Crear un programa que tome dos arreglos de números enteros y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos.

/*const arreglo1 = [3, 6, 9, 12];
const arreglo2 = [1, 4, 7, 10];
const arregloNuevo = arreglo1.concat(arreglo2);

for (i = 0; i < arregloNuevo.length; i++) {
    arregloNuevo[i] = arregloNuevo[i] * 2;
}
console.log(arregloNuevo)*/

//10. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10.
/*
const calificacion = Number(prompt("Ingrese una calificación (entre 1 y 10): "));
if (calificacion < 1 || calificacion > 10) {
    console.log("Error: La calificación debe estar entre 1 y 10.");
} else {
    if (calificacion < 6) {
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === 9) {
        console.log("Bien");
    } else if (calificacion === 10) {
        console.log("Excelente");
    }
}*/

//11. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario
/*
const num1 = Number(prompt("Ingrese el primer número:"))
const num2 = Number(prompt("Ingrese el segundo número:"))

for (let i = 1; i <= 50; i++) {
    if (i === num1 || i === num2) {
        console.log(`${i}¡Lotería!`)
    }
    else {
        console.log(i);
    }
}*/

//12. Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else {
        if (i % 3 === 0) {
            console.log("Fizz")
        }
        else {
            if (i % 5 === 0) {
                console.log("Buzz")
            }
            else {
                console.log(i);
            }
        }
    }
}*/

//13.  Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un programa que permita determinar el bono que recibirá un trabajador. 
/*
const antiguedad = Number(prompt("Ingrese la antigüedad del trabajador:"))
let bono = 0;
if (antiguedad > 5) {
    bono = 1000;
} else if (antiguedad >= 1) {
    bono = antiguedad * 100;
} else {
    bono = 0;
}
console.log(`El bono que recibirá es de: ${bono} soles`); */

//14: Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el programa utilizando el ciclo apropiado.
/*
let salario = 1500;
for (let i = 1; i <= 6; i++) {
    salario += salario * 0.1;
    console.log(`El salario en el año ${i} es de ${salario}`);
}*/

//15: En una lista de palabras, el bibliotecario necesita saber cuál es la palabra más larga en el archivo. Ayúdale a encontrarla.
/*
const palabras = ["manzana", "banana", "cereza", "uva", "fresa"];

let palabraLarga = "";
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraLarga.length) {
        palabraLarga = palabras[i];
    }
}
console.log(palabraLarga);
*/

//16: Un coleccionista tiene una caja con varias cartas. Algunas cartas están numeradas del 1 al 10, pero hay algunas cartas repetidas. ¿Cuántas cartas únicas tiene en total?
/*let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];
let unicas = [];

for (let i = 0; i < cartas.length; i++) {
    let contador = 0;

    for (let j = 0; j < cartas.length; j++) {
        if (cartas[i] === cartas[j]) {
            contador++;
        }
    }

    if (contador === 1) {
        unicas.push(cartas[i]);
    }
}
console.log(unicas.length);*/

/*17. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida, cuánto le costará en función del topping que elija.
• El helado sin topping cuesta 50 MXN.
• El topping de oreo cuesta 10 MXN.
• El topping de KitKat cuesta 15 MXN.
• El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
precio del helado sin ningún topping.*/
/*
const helado = {
    nombre: "Helado",
    precio: 50,
    toppings: {
        oreo: 10,
        kitkat: 15,
        brownie: 20
    }
}

const topping = prompt("Ingrese el topping deseado: \n - oreo: +10 MXN\n - kitkat: +15 MXN\n - brownie: +20 MXN");

if (topping === "oreo") {
    console.log(`El helado cuesta ${helado.precio + helado.toppings.oreo} MXN`);
} else if (topping === "kitkat") {
    console.log(`El helado cuesta ${helado.precio + helado.toppings.kitkat} MXN`);
} else if (topping === "brownie") {
    console.log(`El helado cuesta ${helado.precio + helado.toppings.brownie} MXN`);
}
else {
    console.log(`No tenemos este topping, lo sentimos.`);
    console.log(`El helado cuesta ${helado.precio} MXN`);
} */

/* 18. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida. El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:

• Course: $4999 MXN
• Carrera $3999 MXN
• Master: $2999 MXN */
/*
const curso = {
    course: 4999,
    carrera: 3999,
    master: 2999
}

const nivel = prompt("Ingrese el nivel deseado: \n - course\n - carrera\n - master");

if (nivel === "course") {
    console.log(`El  course cuesta $${curso.course} MXN`);
} else if (nivel === "carrera") {
    console.log(`La carrera cuesta $${curso.carrera} MXN`);
} else if (nivel === "master") {
    console.log(`El master cuesta $${curso.master} MXN`);
}

else {
    console.log(`No tenemos este nivel, lo sentimos.`);
}

/* Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
correspondiente al precio final.
• Beca Facebook: 20% de descuento.
• Beca Google: 15% de descuento.
• Beca Jesua: 50% de descuento. 

const beca = prompt("Ingrese el tipo de beca: \n - facebook\n - google\n - jesua");
let descuento = 0;

if (beca === "facebook") {
    descuento = 0.20;
} else if (beca === "google") {
    descuento = 0.15;
} else if (beca === "jesua") {
    descuento = 0.50;
}

let precioDescuento = curso[nivel] * (1 - descuento);

console.log(`El nivel cuesta con descuento por beca $${precioDescuento} MXN`);

/*Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:

• Course: 2 meses
• Carrera 6 meses
• Master: 12 meses
const duracion = {
    course: 2,
    carrera: 6,
    master: 12
}

console.log(`El costo en total por beca y duracion $${precioDescuento * duracion[nivel]} MXN`);
*/

//19. Crea un programa que solicite al usuario números, si lo que este introduce es un  número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en  pantalla o en la consola. 
/*
let numeros = [];
let numero = Number(prompt("Ingrese un número:"));

while (numero !== 0) {
    numeros.push(numero);
    numero = Number(prompt("Ingrese otro número: si desea terminar de ingresar un número presione 0"));
}
console.log(numeros);
*/
//20. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente: Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere:  total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. 

/*
function calcularTotal() {

    const vehiculo = {
        coche: 0.20,
        moto: 0.10,
        autobus: 0.5
    }

    let total = 0;

    const tipoVehiculo = prompt("Ingrese el tipo de vehículo: \n - coche \n - moto \n - autobus").toLowerCase();
    const litros = Number(prompt("Ingrese la cantidad de litros consumidos:"));
    const kms = Number(prompt("Ingrese la cantidad de kilómetros recorridos:"));

    if (!vehiculo[tipoVehiculo]) {
        console.log("No tenemos ese tipo de vehículo");
        return;
    } else if (isNaN(litros) || isNaN(kms)) {
        console.log("Por favor, ingrese números válidos");
        return;
    } else {
        total = vehiculo[tipoVehiculo] * kms;
        if (litros >= 0 && litros <= 100) {
            total += 5;
        } else if (litros > 100) {
            total +=10;
        }
        console.log(`El total a pagar es de $${total}`);
    }
}
calcularTotal(); */