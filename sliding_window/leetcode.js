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

//! 3. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let leftWindow = 0;
  let map = {};
  let result = 0;

  for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
    let letter = s[rightWindow];
    if (map[letter] !== undefined) {
      result = Math.max(result, rightWindow - leftWindow);
      leftWindow = map[letter] + 1;
      map = {};
      for (let i = leftWindow; i <= rightWindow; i++) {
        map[s[i]] = i;
      }
    } else {
      map[letter] = rightWindow;
    }
  }

  return Math.max(Object.keys(map).length, result);
};

const lengthOfLongestSubstring_explain = (s) => {
  let leftWindow = 0;
  let rightWindow = 0;
  // let set = new Set();
  let map = {};
  let result = 0;

  while (rightWindow < s.length) {
    if (!map[s[rightWindow]]) {
      // set.add(s[rightWindow]);
      map[s[rightWindow]] = true;
      rightWindow++;
      result = Math.max(rightWindow - leftWindow, result);
    } else {
      // set.delete(s[leftWindow]);
      delete map[s[leftWindow]];
      leftWindow++;
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring_explain("pwwkew"));
