Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};

(function() {
	var ratings = [2,3,1,9,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	let maxrating = ratings.reduce(function(accumulatedValue, currentValue) { 
			if (accumulatedValue > currentValue)
				return accumulatedValue;
			else
				return currentValue; 
		}); 
	console.log(maxrating);
	//return ratings.reduce   // Complete this expression
})();

		