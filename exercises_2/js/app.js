//zadanie a1

function zadanie1(a, b, c){
    var suma = a+b+c;
    return suma;
};

console.log(zadanie1(1,2,3));

//zadnaie a2

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function zadanie2(r){
    if(isNumeric(r) == true){
    var pole = Math.PI * Math.pow(r, 2);
    var obwod = 2 * Math.PI * r;
    
    console.log("pole wynosi "+pole+" a obwod "+obwod);
    }else{
        return false;
    }
}

console.log(zadanie2("world"));

//zadanie b1

var a = function(){
    for(var i=0; i<10; i++){
        console.log("Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych.")
    }
}

a();

//zadanieb

function calculateTip(amount, rating){
    if(rating !== null){
        switch(rating){
            case "Bardzo dobra obsługa": 
                return amount*0.25;
            case "Dobra obsługa":
                return amount*0.2;
            case "Średnia obsługa":
                return amount*0.15;
            case "Zła obsługa":
                return amount;
        }
    }else{
        return("Opis nieczytelny");
    }
}

console.log(calculateTip(100, "Bardzo dobra obsługa"));