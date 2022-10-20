function lowerToUpper(lowerStr) {
	let letterList = lowerStr.split('');
	letterList[0] = letterList[0].toUpperCase();
	return letterList.join('');

}

console.log(lowerToUpper('hi'));