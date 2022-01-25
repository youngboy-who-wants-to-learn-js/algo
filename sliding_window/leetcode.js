/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let leftWindow = 0;
  let rightWindow = 0;
  let sum = 0;
  let result = +Infinity;
  let prev = 0;

  while (leftWindow <= nums.length - 1 && rightWindow <= nums.length - 1) {
    if (prev === rightWindow) {
      sum += nums[rightWindow];
    }

    if (sum >= target) {
      result = Math.min(result, rightWindow - leftWindow + 1);
      sum -= nums[leftWindow];
      leftWindow++;
    } else {
      prev = rightWindow;
      rightWindow++;
    }

    prev++;
  }

  return result === Infinity ? 0 : result;
};

const minSubArrayLenExplain = (s, nums) => {
  let sum = 0;
  let minLength = Infinity;
  let prevIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      minLength = Math.min(minLength, i - prevIndex + 1);
      sum -= nums[prevIndex];
      prevIndex++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

//! 904. Fruit Into basketSets
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let leftWindow = 0;
  let basketSet = new Set();
  let count = 0;
  let maximumFruit = 0;

  for (let rightWindow = 0; rightWindow < fruits.length; rightWindow++) {
    const curElem = fruits[rightWindow];
    if (
      basketSet.size > 2 ||
      (basketSet.size >= 2 && !basketSet.has(curElem))
    ) {
      basketSet.clear();
      count = 0;
      leftWindow += 1;
      for (let i = leftWindow; i <= rightWindow; i++) {
        basketSet.add(fruits[i]);
        count++;
      }
    } else {
      basketSet.add(curElem);
      count++;
      maximumFruit = Math.max(maximumFruit, count);
    }
  }
  return maximumFruit;
};

/*
var totalFruitExplain = function (fruits) {
  let lastFruit = -1;
  let secondLastFruit = -1;
  let lastFruitCount = 0;
  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];

    if (fruit === lastFruit || fruit === secondLastFruit) {
      currentMax += 1;
    } else {
      currentMax = lastFruitCount + 1;
    }

    if (fruit === lastFruit) {
      lastFruitCount += 1;
    } else {
      lastFruitCount = 1;
    }

    if (fruit !== lastFruit) {
      secondLastFruit = lastFruit;
      lastFruit = fruit;
    }

    max = Math.max(currentMax, max);
  }

  return max;
};
*/
