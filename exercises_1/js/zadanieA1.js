function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania
    
    if(randomNumber%2==0){
        console.log(randomNumber+" jest parzysta");
    }else{
        console.log(randomNumber+" nie jest przysta");
    }
    
    var dzielniki = [];
    for(var i=0; i<=randomNumber; i++){
        if(randomNumber%i==0){
            dzielniki += i;
        }
    }
    console.log(dzielniki);
    
    var wykladnik = randomNumber%5;
    var wynik = 1;
    for(var i = wykladnik; i>0; i--){
        wynik*=randomNumber;
        
    }
    
    console.log(wynik);
    
}


//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
