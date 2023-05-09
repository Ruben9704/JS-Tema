// 1. Tipăriți toate numerele pare de la 0 la 10
console.log("Exercitiu 1");

function numerePare1 (n) {
    let index = 0;

    while (index <= n) {
        if(index % 2 === 0) {
            console.log(index);
        }
        index ++;
    }
}

numerePare1(10);

console.log();


function numerePare2 (n) {
    let index = 0;

    while (index <= n/2) {
        console.log(index * 2);
        index ++;
    }
}

numerePare2(10);


//  2. Calculați suma numerelor dintr-un șir de numere
console.log("Exercitiu 2")



function sumaNumerelor (array) {
    let index = 0;
    let sum = 0;
    

    while (index < array.length) {
        sum = sum + array[index];
        index ++;
    }
    console.log("sum = "+ sum);
}

array1 = [1, -5, 20, -34, 16, 29, 36, -4];
array2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
sumaNumerelor(array1);
sumaNumerelor(array2);


// 3. Creați o funcție care inversează un șir de numere
console.log("Exercitiu 3");

array3 = [1, -5, 20, -34, 16, 29, 36, -4];

function inversor(array) {
    let newArray = [];
    let index = 0;
    let newIndex = array.length-1;

    while (index < array.length) {
        newArray[index] = array[newIndex];
        index++;
        newIndex--;
    }

    return newArray;
}

console.log(inversor(array3));

// 4. Returnează numărul de vocale dintr-un șir de caractere (string)
console.log("Exercitiu 4");

function numarulDeVocale(charArray){
    let count = 0;

    for(let index = 0; index < charArray.length; index++){
        if(charArray[index].toLowerCase() == "a")count++;
        else if(charArray[index].toLowerCase() == "e")count++;
        else if(charArray[index].toLowerCase() == "u")count++;
        else if(charArray[index].toLowerCase() == "i")count++;
        else if(charArray[index].toLowerCase() == "o")count++;
    }

    return count;
}

console.log(numarulDeVocale("string de test"));