frist_arr = [0, 10, 20, 30];
sec_arr = [0, 25, 47, 20];

function arraysIntersection(first_arr, sec_arr){
	return first_arr.filter(element => sec_arr.includes(element));
}

console.log(arraysIntersection(frist_arr, sec_arr));