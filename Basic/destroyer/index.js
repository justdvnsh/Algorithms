// -- Directions 
// Remove the elements from given as the other 
// arguments from the array given as the first argument.
// -- Examples
// destroy([1,2,3,1,2,3],2,3) should return [1,1]
// destroy(['hello','tree','gf'],'hello', 'tree', 'gf') 
// should return [].

function destroy(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}


console.log(destroy([1,2,3,4,1,2,3,4],2,3,4))

function destroyWithIncludes(arr) {
	var args = Array.from(arguments).slice(1);

	return arr.filter((current) => {
		return !args.includes(current);
	})
}

module.exports = destroy
module.exports = destroyWithIncludes

/*
* This algo dosent seem to work weel with ES2015.
* Dont't know  the exact reason.
*/
