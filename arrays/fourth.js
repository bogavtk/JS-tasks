function binarySearch(array, target){
	let leftPart = 0;
	let rightPart = array.length - 1;
	while(array.length - 1 >= 0){
		let middleIndex = Math.floor((leftPart + rightPart) / 2);
		if (array[middleIndex] === target){
			return middleIndex;
		}else if(array[middleIndex] < target){
			leftPart = middleIndex + 1;
		} else{
			rightPart = middleIndex - 1;
		}
	}
	return -1;
}

console.log(binarySearch([1, 2, 10, 12, 16, 49, 56, 90], 12));