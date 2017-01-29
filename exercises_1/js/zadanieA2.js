/**
 * Created by Jacek on 2016-01-11.
 */


function myEval(a, b, operation) {
    var result = 0;
    switch (operation){
        case "+" : result = a + b;
            break;
        case "-" : result = a - b;
            break;
        case "/" : result = a / b;
            break;
        case "*" : result = a * b;
            break;
        case "%" : result = a % b;
            break;
        case "^" : result = Math.pow(a, b);
            break;
    }
    return result;
}

console.log(myEval(2, 3, "+"));
console.log(myEval(2, 3, "-"));
console.log(myEval(2, 3, "/"));
console.log(myEval(2, 3, "*"));
console.log(myEval(2, 3, "^"));
//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja
