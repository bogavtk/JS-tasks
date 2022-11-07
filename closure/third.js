let generateRandom = (function() {
	let arr = [];
	return function() {
		let num = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == num) {
				return;
			};
		};

		arr.push(num);
	};
});

console.log(generateRandom());
console.log(generateRandom());
console.log(generateRandom());
console.log(generateRandom());