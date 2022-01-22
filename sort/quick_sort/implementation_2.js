const array = [161, 231, 65, 5, 2, 89, 1, 64, 89];

function quickSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = Math.floor((0 + array.length - 1) / 2);
    const currentItem = array[pivot];

    const more = [];
    const less = [];

    for (let i = 0; i < array.length; i++) {
      if (i === pivot) {
        continue;
      }

      if (array[i] > currentItem) {
        more.push(array[i]);
      } else {
        less.push(array[i]);
      }
    }

    return [...quickSort(less), currentItem, ...quickSort(more)];
  }
}

const result = quickSort(array);
console.log("sorted array:", result);
