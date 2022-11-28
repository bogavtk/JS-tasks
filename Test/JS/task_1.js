let money = 1200;

const avaliable = [1000, 500, 200, 100, 50];

function getAmount(money) {
	const needMoney = [];

	if (money > 0) {
		for (let i = 0; i < avaliable.length; i++) {
			let note = avaliable[i];

			while (money - note >= 0) {
				money -= note;
				needMoney.push(note);
			}
		}
	} else {
		return -1;
	}

	return needMoney.length;
}

console.log(getAmount(money));