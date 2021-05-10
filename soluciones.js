//Arrays

//Ejercicio 1
let testArray = [165, 2, -59, 5000, 289, 171, 20, 1, 3, 89];

const bubbleSort = array => {
    array.map(item1 => array.map((item2, index) => {
        if (array[index] > array[index + 1]) {
            array[index] = array[index + 1];
            array[index + 1] = item2;
        }
    }))
    return array
}

console.log(bubbleSort(testArray))

//Ejercicio 2
let testArray1 = [1,3,6,4,1,2];
let testArray2 = [1,2,3];
let testArray3 = [-1,-3];

const menorNumeroPositivo = array => {

    let x = 1
    
    array.filter(x => x >= 1)
     .sort((a, b) => a - b)
     .map((value, index, array1) => {
        if(x < array1[index]) return
        x = array1[index] + 1
    })

    return console.log(x)
}

menorNumeroPositivo(testArray1);
menorNumeroPositivo(testArray2);
menorNumeroPositivo(testArray3);


//Strings

//Ejercicio 1
const isStringIn = (string1, string2) => {
    let letras = [...string1];
    let respuesta = [...string2].every(x => {
        let index = letras.indexOf(x);
        if (~index) {
            letras.splice(index, 1);
            return true;
        }
    });
    if (respuesta) {
        return console.log("YES");
    } else {
        return console.log("NO");
    }
}

isStringIn("pigmalion", "pila");
isStringIn("pigmalion", "ala");
isStringIn("pigmalion", "liima");

 

//Ejercicio 2
const input = "Ethernet"

const primerCaracterNoRepetido = string => {
    let arrayString = string.toLowerCase().split("");
    let respuesta = "";
    arrayString.map((item, index) => {
        if (arrayString.indexOf(item) == index && arrayString.indexOf(item, index + 1) == -1) {
            if (respuesta === "") {
                respuesta = item;
            }
        }
    })

    return console.log(respuesta);
}
 
primerCaracterNoRepetido(input);




