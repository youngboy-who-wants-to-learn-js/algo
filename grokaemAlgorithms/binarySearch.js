const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySeach(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];
    if ((guess = item)) {
      return mid;
    }

    if (guess > item) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return -1;
}

console.log(binarySeach(list, 5));
