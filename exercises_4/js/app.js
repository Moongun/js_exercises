//zadanie a1

function checkArray(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var tOf = true;
        for (var k = 0; k < array[i].length; k++) {
            if (array[i][k] % 2 != 0) {
                var tOf = false;
            }
        }
        newArray.push(tOf);
    }
    return newArray;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]

console.log(checkArray(arr));

//zadanie b1

function print2DArray(array){
    array.forEach(function(element, index, array){
        console.log(element);
    });
}

print2DArray(arr);

//zadanie b2 - odnosnik do var arr;

//zadanie b3

function create2DArray(rows, columns){
    var arr=[];
    for(var i=0; i<=rows-1; i++){
        arr.push([]);
        for(var k=1; k<=columns; k++){
            arr[i].push(k);
        }
    }
    return arr;
}

print2DArray(create2DArray(4, 7));

