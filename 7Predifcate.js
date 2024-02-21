Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
	//console.log(itemInArray); 
    if (predicateFunction(itemInArray)){
      results.push(itemInArray);
    }
    });
  
  return results;
};

//let obj = JSON.stringify([1,2,3,5].filter((x) => {return x > 2})) ;
let obj = JSON.stringify([1,2,3,5].filter((x) => x > 1)) ;
console.log(obj); // [3,5]
		