function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }

  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}

console.log(quickSort([1, 8, 6, 9, 11, 4]));
