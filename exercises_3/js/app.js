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
console.log(add([1,2,3,4,5]));
console.log(multiply([1,2,3,4,5]));


//zadanie a3
function distFromAvarage(array){
    var srednia = add(array)/array.length;
    
    for (var i=0; i<array.length; i++){
        var roznica = srednia - array[i];
        console.log(roznica);
    }
}

distFromAvarage([1,2,3,4,5,6,7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)


//zadanie b1
var array = ["banan", "jablko", "arbuz", "śliwka"];

console.log(array[0]);

function last(array){
    for(var i=0; i<array.length; i++){
        if(i==array.length-1){
            return array[i];
        }
    }
}

console.log(last(array));

function all(array){
    for(var i =0; i<array.length; i++){
        console.log(array[i]);
    }
}
all(array);


//zadanie b2
 var 