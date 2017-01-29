var zmienna1 = 2; 
var zmienna2 = "string";
var zmienna3 = 2.6;
var zmienna4 = true;
var zmienna5 = null;
var zmienna6 = undefined;
var zmienna7 = [1, 2, [33, "Ola"]];
var zmienna8 = {co: "Ala", kiedy: "jutro"};


console.log("int + str = "+(zmienna1 + zmienna2)+ " // "+typeof(zmienna1 + zmienna2)); // int + str = str
console.log("int + int = "+(zmienna1 + zmienna3)+ " // "+typeof(zmienna1 + zmienna3)); // int + int = int
console.log("int + bool = "+(zmienna1 + zmienna4)+ " // "+typeof(zmienna1 + zmienna4)); // int + bool = int
console.log("int + null = "+(zmienna1 + zmienna5)+ " // "+typeof(zmienna1 + zmienna5)); // int + null = int
console.log("int + undefined = "+(zmienna1 + zmienna6)+ " // "+typeof(zmienna1 + zmienna6)); // int + undefined = int
console.log("int + array = "+(zmienna1 + zmienna7)+ " // "+typeof(zmienna1 + zmienna7)); // int + arr = str
console.log("int + object = "+(zmienna1 + zmienna8)+ " // "+typeof(zmienna1 + zmienna8)); // int + object = str

