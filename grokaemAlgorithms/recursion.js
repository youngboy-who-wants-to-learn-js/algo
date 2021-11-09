function countdown(x) {
  if (x <= 0) {
    return console.log("report finished");
  } else {
    let newX = x - 1;
    console.log(newX);
    return countdown(newX);
  }
}

function factorial(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let tmp = arr[0];
    arr.shift();
    return tmp + sum(arr);
  }
}

function countElem(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return 1 + (arr.length - 1);
  }
}

function maxElem(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    if (arr[0] > arr[1]) {
      arr[1] = arr[0];
    }
    return maxElem(arr.slice(1));
  }
}

function printElem(arr, i = 0) {
  if (arr.length === i) {
    return console.log("print finished");
  } else {
    console.log(arr[i]);
    const newI = i + 1;
    return printElem(arr, newI);
  }
}

// function foo(x) {
//   if (x === 1) {
//     return "потерялся";
//   } else {
//       const newX = x - 1
//     return foo(newX);
//   }
// }

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalary(departament) {
  if (Array.isArray(departament)) {
    return departament.reduce((acc, item) => acc + item.salary, 0);
  } else {
    let sum = 0;
    for (let values of Object.values(departament)) {
      sum += sumSalary(values);
    }

    return sum;
  }
}
