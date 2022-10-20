const sumArray = (arr) =>{
	sumCounter = 0;
	for (let i = 0; i < arr.length; i++){
		sumCounter += arr[i];
	}
	return sumCounter;
}

console.log(sumArray([19, 10, 0, 7]));