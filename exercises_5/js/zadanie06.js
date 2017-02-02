var Calculator = function () {
    this.dodawanie = [];
    this.odejmowanie = [];
    this.dzielenie = [];
    this.mnozenie = [];
    
    this.add = function (num1, num2) {
        var result = num1 + num2;
        this.dodawanie.push(result);
        
        console.log("added " + num1 + " to " + num2 + " got " + result);
    }

    this.multiply = function (num1, num2) {
        var result = num1 * num2;
        this.mnozenie.push(result);
        
        console.log("multiplied "+num1+" with "+num2+" got "+result);
    }
    
    this.substract = function (num1, num2){
        var result = num2-num1;
        this.odejmowanie.push(result);
        
        console.log("substracted "+num1+" from "+num2+" got "+result);
    }
    
    this.divide = function (num1, num2){
        var result = num1/num2;
        this.dzielenie.push(result);
        
        console.log("divided "+num1+" by "+num2+" got "+result);
    }
    
    this.Operations = function (){
        console.log("add: "+this.dodawanie+
                ". multiply: "+this.mnozenie+
                ". substract: "+this.odejmowanie+
                ". divide: "+this.dzielenie)
    }
    
    this.clearOperations = function(){
    this.dodawanie = [];
    this.odejmowanie = [];
    this.dzielenie = [];
    this.mnozenie = [];
        
        console.log("wyczyszczono");
    }
}

var liczby = new Calculator();
liczby.add(5,5);
liczby.substract(10,7);
liczby.multiply(3,7);
liczby.divide(30, 10);

liczby.Operations();
liczby.clearOperations();
liczby.Operations();
