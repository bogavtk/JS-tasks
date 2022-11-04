function sumOfNumbers(number) {
	let counter = number;
	return function plusNumber(afterNumbers) {
		if (afterNumbers === undefined){
			return counter;
		}

		counter += afterNumbers;
		return plusNumber;
	}
}

console.log(sumOfNumbers(1)(35)(24)());