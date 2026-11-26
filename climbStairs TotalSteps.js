function climbStairs(totalSteps){

    let count = 1;
    
    while(count < totalsteps){
    count++;
    }
    
    let counter = 0;
    for(let counter1 = 0; counter1 < totalsteps; counter1 += 2){
    counter1 += 1;
    }
    return count + counter;
}

console.log(climbstairs(10));

