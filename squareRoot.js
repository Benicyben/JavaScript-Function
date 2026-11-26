squareRoot
function findSquareRoot(number) {
if (number < 0) {
return "Invalid";
}

let guess = 0;
while ((guess + 1) * (guess + 1) <= number) {
guess = guess + 1;
}

return guess;
}

console.log(findSquareRoot(38));
console.log(findSquareRoot(-22));
console.log(findSquareRoot(144));

console.log(" ");
