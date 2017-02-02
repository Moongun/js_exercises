function theBiggest(arguments){
    choosenOne = 0;
    for(var i = 0; i<arguments.length -1; i++){
      if(arguments[i]>arguments[i+1]){
          choosenOne = arguments[i];
      }  
    }
    return choosenOne;
}

var arr = [5, 29, 6, 4, 34, 56, 2, 3];

console.log(theBiggest(arr));