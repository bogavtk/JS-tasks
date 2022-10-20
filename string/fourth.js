function unicSymbols(word) {
	let wordNeed = word.toLowerCase();
	let unicLetterString = "";
	for (let i = 0; i < wordNeed.length; i++) {
		if (unicLetterString.indexOf(wordNeed.charAt(i)) == -1) {
			unicLetterString += wordNeed[i];

		}
	}
	return unicLetterString;
}

console.log(unicSymbols('Lalaland'));