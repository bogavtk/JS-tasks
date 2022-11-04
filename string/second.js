function deleteSymbols(needStr){
	needStr = needStr.replace(/[^a-zа-яё0-9\s]/gi, ' ');
	return needStr;
}

console.log(deleteSymbols('Hello./.,./!&^'))