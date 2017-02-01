//zadanie a2

function add(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function multiply(array) {
    var mnozenie = 1;
    for (var i = 0; i < array.length; i++) {
        mnozenie *= array[i];
    }
    return mnozenie;
}
console.log(add([1, 2, 3, 4, 5]));
console.log(multiply([1, 2, 3, 4, 5]));


//zadanie a3
function distFromAvarage(array) {
    var srednia = add(array) / array.length;

    for (var i = 0; i < array.length; i++) {
        var roznica = srednia - array[i];
        console.log(roznica);
    }
}

distFromAvarage([1, 2, 3, 4, 5, 6, 7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1, 1, 1, 1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2, 8, 3, 7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)


//zadanie b1
var array = ["banan", "jablko", "arbuz", "śliwka"];

console.log(array[0]);

function last(array) {
    for (var i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            return array[i];
        }
    }
}

console.log(last(array));

function all(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
all(array);


//zadanie b2
function printTable(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printTable(array);


//zadanie b3
function factors(a) {
    var table = [];

    if (isNaN(a) == true) {
        return "wpisana zmienna nie jest liczbą";
    }
    ;

    if (a > 0) {
        for (var i = a; i > 0; i--) {
            if (a % i == 0) {
                table += i;
            }
        }
    }
    return table;
}

console.log(factors(8));
console.log(factors(-1));
console.log(factors("ziemniaczek"));
console.log(factors(14.78));
console.log(factors(15.5));


//zadanie b4
function getMissingElement(array){
    var table = null;
    for(var i=0; i<array.length-1; i++){
        if(array[i]+1 !== array[i+1]){
            table+=array[i]+1;
        }
    }
    return table;
}
var one = [1,2,3,4,5,6,7];
var two = [6,7,8,10,11,12,13,14,15];
var three = [-4,-3,-2,0,1,2,3,4];
console.log(getMissingElement(one)); //=> null
console.log(getMissingElement(two)); //=> 9
console.log(getMissingElement(three)); //=> -1


//zadanie b5
var array= [1991, 1992, 1986, 1974, 2012];

function youngest(array){
    return Math.max.apply(null, array);
}
function oldest(array){
    return Math.min.apply(null, array);
}

console.log(youngest(array));
console.log(oldest(array));
