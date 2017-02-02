var jajo = function boilEgg(czas) {
    setTimeout(function () {
        console.log("Jajko ugotowane");
    }, czas*1000);
    setInterval(function () {
        console.log("Jajko się gotuje");
    }, 5000);
}

jajo(30);