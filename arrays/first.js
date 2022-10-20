const deleteRepeatElement = (arr) => {
	let array = arr;
	let unicArray = new Set(arr);
	unicArray = Array.from(unicArray);
	return unicArray;
}

console.log(deleteRepeatElement([19, 10, 19, 9]));