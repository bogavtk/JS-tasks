function findPalindrom(word) {
	return word.split('').reverse().join('') == word;
}

console.log(findPalindrom("wolow"));