var Rectangle = function(dlugosc, szerokosc){
    this.getArea = function(){
        var pole = dlugosc * szerokosc;
        console.log("pole powierzchni: "+pole);
    }
    this.getPerimiter = function (){
        var obwod = 2*dlugosc +2*szerokosc;
        console.log("obwod wynosi: "+ obwod);
    }
}

var krzyzak = new Rectangle(7,10);
krzyzak.getArea();
krzyzak.getPerimiter();
