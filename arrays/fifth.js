function merge(left, right) {
	let sortedArray = [];
	while (left && right) {
		if (left[0] < right[0]) {
			sortedArray.push(left.shift());
		} else {
			sortedArray.push(right.shift());
		}
	}
	return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
	const middle = Math.floor(arr.length / 2);
	if (arr.length <= 1) {
		return arr;
	}

	const left = arr.splice(0, middle);
	const right = arr;
	return merge(mergeSort(left), mergeSort(right));
}

const array = [2, 12, 1, 9, 18, 56, 43];

console.log(mergeSort(array));