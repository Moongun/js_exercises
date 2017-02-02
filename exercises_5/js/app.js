//zadanie 1

function upperLower(string){
    var retString = "";
    var charCount=0;
    for(var i=0; i<string.length; i++){
        var currCharr=string[i];
        if(currCharr != " "){
            charCount++;
        }
        if(charCount%2!=0){
            retString+=currCharr.toLowerCase();
        }else{
            retString+=currCharr.toUpperCase();
        }
    }
    return retString;
}

var zmieniony = upperLower("Przykładowy jakiś napis");
console.log(zmieniony);

String.prototype.upperLower = function(){
     // pobieramy wartość stringu
    var string = this.valueOf()
 
    // definiujemy wewn. licznik
    var charCount = 0
 
    // inicjujemy zwracany string
    var retString = ""
 
    // przechodzimy po wszystkich znakach stringu
    for (var i=0; i<string.length; i++) {
 
        // pobieramy do zmiennej znak na bieżącej pozycji
        var currChar = string[i]
 
        // powiększamy licznik znaków tylko dla znaków, które nie są spacjami
        if (currChar!=" ") {
            charCount++
        }
 
        // jeśli pozycja znaku jest parzysta...
        if ((charCount%2)==0) {
            // ...to znak powiększamy i dopisujemy do zmiennej retString
            retString += string[i].toUpperCase()
        } else {
            // ... jeśli nie - zmniejszamy znak i dopisujemy do zmiennej retString
            retString += string[i].toLowerCase()
        }
    }
 
    // zwracamy zbudowana zmienna
    return retString
}


var innaOpcja = "coś z niczego powstaje kolego".upperLower();
console.log(innaOpcja);

//zadanie 2

var Samochod = function(mark, color){
    this.mark = mark;
    this.color = color;
    this.km = 0;
    
    this.printCarInfo = function(){
        console.log(this.mark);
        console.log(this.color);
        console.log(this.km);
    }
    
    this.drive = function(km){
        this.km = this.km+km;
    }
}
var opel = new Samochod("opel", "czerwony");
opel.drive(30);
opel.drive(60);
opel.drive(60);

opel.printCarInfo();


//zadanie 3

Samochod.przeglady = ["12/10/1999", "12/10/2000", "12/10/2001"];

Samochod.prototype.addPrzeglad = function(przeglad){
    this.przeglady.push(przeglad); 
}

Samochod.prototype.showPrzeglady = function(){
    console.log(this.przeglady);
}

opel.przeglady = ["12/10/1999", "12/10/2000", "12/10/2001"];
opel.addPrzeglad("12/10/2002");

opel.showPrzeglady();
