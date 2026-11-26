function reverseInteger(number){
	
	if (number >0){
	reverse = 0;
	while (number>0) {
		reverseOne = number % 10;
		reverse =reverse * 10 + reverseOne;
		number = Math.floor(number/10);
	}
	}
	else {
	    reverseOne = (number % 10);
	    
	    reverse = reverseOne;
	    number = Math.floor(number/-10);
	    while (number>0) {
		reverseOne = number % 10;
		reverse =reverse * 10 - reverseOne;
		number = Math.floor(number/10);
	}
	}
	return reverse
}
result = reverseInteger(746538);
console.log (reverseInteger(result));
