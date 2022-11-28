arr = [1, 12, 0, 12, 0, 12, 0, 0, 13];

function rightZeros(array) {

	for (var i = 0, j = 0; i < array.length; i++) {
		if (array[i] !== 0) {
			[array[j], array[i]] = [array[i], array[j]];
			j++;
		}
	}
	return array;
}

console.log(rightZeros(arr));