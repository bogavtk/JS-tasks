function counterReturn() {
	let counter = 0;
	return function () {
		counter += 1;
		return counter;
	}
}

let func = counterReturn();

func();
func();

console.log(func()); // 3