function replaceAll(find, replace, str){
	if(str.includes(find)){
		return str.replace(find, replace);
	}
	
}

console.log(replaceAll('ell', 'i', 'Hello'));