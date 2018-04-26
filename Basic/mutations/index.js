// -- Directions 
// check if the first element of the array contains 
// all the letters of the second element of the array
// -- Examples
// mutations(['hello','hey']) should return false.
// mutations(['girlfriend','gf']) should return true.

let mutations = (arr) => {
	return arr[1].toLowerCase().split('')
		.every((current) => {
			return arr[0].toLowerCase()
				.indexOf(current) !== -1;
		});
}

console.log(mutations(['hello','hey']))

/*
Similarly we can also solve this with loop

let mutations = (arr) => {
	let test = arr[1].toLowerCase();
	let target = arr[0].tolowerCase();
	for(let i =0; i< test.length; i++){
		if(target.indexOf(test[i]) === -1){
			return false;
		}
	}
	return true;
}
*/


module.exports = mutations
