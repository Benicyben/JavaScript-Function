function isPowerOfTwo(number){
    result = false;
    for (counter = 0; counter <= number; counter++){
        if (2 ** counter == number){
          result = true;
        }
            
    }
    return result;
}
console.log(number(16));
