module.exports = function longestConsecutiveLength(array) {

	let currentCountTheConsecutiveElements = 1, bestCountTheConsecutiveElements = 1;

	if(array.length == 0 ) return 0;

	array.sort( (a, b) => {
		return a - b;
	});

	for ( let i = 0; i < array.length - 1; i++ ){
		if(array[i] == (array[i + 1])){ 
			continue;
		}

		if( array[i] == (array[i + 1] - 1 )){
			currentCountTheConsecutiveElements++;
		}

		if( bestCountTheConsecutiveElements < currentCountTheConsecutiveElements ){
			bestCountTheConsecutiveElements = currentCountTheConsecutiveElements;
		}

		if( array[i] != (array[i + 1] - 1 )){
			currentCountTheConsecutiveElements = 1;
		}
	}

	return bestCountTheConsecutiveElements;
}