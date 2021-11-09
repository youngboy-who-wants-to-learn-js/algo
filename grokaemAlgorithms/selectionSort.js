function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// function selectionSort(arr) {
//     let n = arr.length

//     for (let i = 0; i < n; i++) {
//         let min = i

//         for (let j = 0; j < n; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }

//         if (min !== i) {
//             let tmp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = tmp
//         }
//     }
//     return arr
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
    // [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr;
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]));
