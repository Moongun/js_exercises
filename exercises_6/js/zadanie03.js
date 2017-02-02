/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Tworzymy nową funkcję
function sortArray() {

    //tworzymy tablicę wewnątrz funkcji
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie metody sort na tablicy points
    points.sort(function(a, b) {
        //zwracamy różnicę a-b
        return a-b;
    });

    //zwracamy posortowaną tablicę
    return points;
}

//nic nie robi, ponieważ wartości nie zostały przypisane do żadnej zmiennej (wcześniejsza wartość jest tylko zwrócona)
sortArray();
