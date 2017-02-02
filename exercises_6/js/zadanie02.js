/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Tworzenie funkcji jeden
function jeden() {

    //tworzenie zmiennej lokalnej zmenna1 wewnątrz funkcji jeden
    var zmienna1 = 1;

    //zagnieżdzenie funkcji dwa w funkcji jeden
    function dwa() {

        //wyświetlenie w funkcji dwa zmiennej1, ktorą ta funkcja traktuje jako globalną
        console.log(zmienna1);

        //utworzenie zmiennej lokalnej zmienna2 wewnątrz funkcji dwa
        var zmienna2 = 3;
    }

    //wywolanie funkcji dwa
    dwa();

    //Błąd, ponieważ funkcja jeden nie ma dostępu do zmiennych zainicjowanych w funkcji zagnieżdzonej
    console.log(zmienna2)
}

//do tego skrypt nie dochodzi, ponieważ wyrzuca błąd dotyczący linii 28
jeden()