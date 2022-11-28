let firstWord = "bird";
let secondWord = "drib";

function findAnagram(firstWord, secondWord) {

	if (firstWord.length !== secondWord.length) {

		return false

	} else {

		return firstWord.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') ===
			secondWord.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')

	}



}

console.log(findAnagram(firstWord, secondWord));