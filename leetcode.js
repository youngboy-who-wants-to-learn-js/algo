/**
 * @param {string} s
 * @return {boolean}
 */
//! Valid brackets

var isValid = function (s) {
  let stack = [];

  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if ("([{".includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (!stack.length) return false;
      const lastValue = stack[stack.length - 1];

      if (map[lastValue] === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return (
    [...new Set(nums)].reduce((a, b) => a + b) * 2 -
    nums.reduce((a, b) => a + b)
  );
};
// TODO later repeat
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//? dynamical programming
var wordBreak = function (s, wordDict) {
  let map = {};

  wordDict.forEach((word) => {
    map[word] = true;
  });

  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  console.log("dp", dp);
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};
// TODO problems
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//?  pointer in sorted array
var removeElement = function (nums, val) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
};

/**
 * @param {number} n
 * @return {string[]}
 */
// ? fizz buzz
var fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) {
      result.push("FizzBuzz");
    } else if (!(i % 3)) {
      result.push("Fizz");
    } else if (!(i % 5)) {
      result.push("Buzz");
    } else {
      result.push(i + "");
    }
  }

  return result;
};

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   if (!needle.length) return 0;
//   // return haystack.indexOf(needle);
//   let returnedIndex = -1;
//   let isFind = false;

//   for (let i = 0; i <= haystack.length; i++) {
//     if (haystack[i] === needle[0] && !isFind) {
//       let count = 0;
//       for (let j = 0; j < needle.length; j++) {
//         if (needle[j] === haystack[i + j]) {
//           count++;
//         }
//       }

//       if (count === needle.length) {
//         returnedIndex = i;
//         isFind = true
//       }
//     }
//   }

//   return returnedIndex;
// };
//? two pointets
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (!haystack) return -1;
  if (haystack.length < needle.length) return -1;

  let i = 0;
  let j = 0;

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      i = ++i - j;
      j = 0;
    }
  }
  if (j === needle.length) return i - j;

  return -1;
};

// greedy algorithms
let COINS = [50, 25, 10, 5, 1];

function computeChange(coins, amount) {
  let i = 0;
  let coincount = [0, 0, 0, 0, 0];

  while (i < coins.length) {
    console.log("i < coins.length", i, coins.length);
    while (coins[i] <= amount) {
      console.log("COINS[i] <= amount", coins[i], amount);
      amount = amount - coins[i];
      coincount[i] = coincount[i] + 1;
      console.log("amount", amount);
      console.log("coincount[i] ", coincount[i]);
      console.log("coincount", coincount);
    }

    i++;
  }

  return coincount;
}

/*
 * @param {number[]} nums
 * @return {number}
 */
//? pointers sorted array
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }

  return count + 1;
};

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] --> [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]

//? Palindrome
function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let number = x;
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = parseInt(number / 10);
  }

  return x === reversed;
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mapSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    // "IV": 4,
    // "IX": 9,
    // "XL": 40,
    // "XC": 90,
    // "CD": 400,
    // "CM": 900
  };

  let number = 0;

  // for (let i = 0; i < s.length; i++) {

  //   if (mapSymbol[s[i] + s[i + 1]] && mapSymbol[s[i]] < mapSymbol[s[i + 1]]) {
  //     number += mapSymbol[s[i] + s[i + 1]];
  //     i++
  //   } else {
  //     number += mapSymbol[s[i]];
  //   }

  // }

  for (let i = 0; i < s.length; i++) {
    const currentItem = mapSymbol[[s[i]]];
    const nextItem = mapSymbol[[s[i + 1]]];
    if (currentItem < nextItem) {
      number += nextItem - currentItem;
      i++;
    } else {
      number += currentItem;
    }
  }
  return number;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // let isFindIndex = false;
  // let index;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] == target) {
  //     return i;
  //   }

  //   if (!isFindIndex) {
  //     if (
  //       (target > nums[i - 1] && target < nums[i]) ||
  //       (target < nums[i] && !nums[i - 1])
  //     ) {
  //       index = i;
  //       isFindIndex = true;
  //     } else if (target > nums[i] && !nums[i + 1]) {
  //       index = i + 1;
  //     }
  //   }
  // }
  // return index;

  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // let rememberUnit = 0;
  // digits[digits.length - 1] = digits[digits.length - 1] + 1;

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (rememberUnit) {
  //     digits[i] = digits[i] + 1;
  //     rememberUnit = 0;
  //   }

  //   if (digits[i] > 9) {
  //     digits[i] = 0;
  //     rememberUnit = 1;
  //   }
  // }

  // if (rememberUnit) {
  //   return [1, ...digits];
  // }

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (digits[i] + 1 > 9) {
  //     digits[i] = 0;

  //     if (digits[i - 1]) {
  //       console.log(digits[i - 1]);
  //       digits[i - 1] = digits[i - 1] + 1;
  //       if (digits[i - 1] <= 9) return digits;
  //     } else {
  //       return [1, ...digits];
  //     }
  //   } else {
  //     digits[i] = digits[i] + 1;
  //     return digits;
  //   }
  // }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }

  return [1, ...digits];
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // const maxLength = Math.max(a.length, b.length);
  // a = a.padStart(maxLength, "0");
  // b = b.padStart(maxLength, "0");

  // let rememberUnit = 0;
  // let result = "";

  // for (let i = a.length - 1; i >= 0; i--) {
  //   let an = +a[i];
  //   let bn = +b[i];
  //   if (an + bn >= 2 && !rememberUnit) {
  //     rememberUnit = 1;
  //     result += "0";
  //   } else if (rememberUnit && rememberUnit + an + bn == 2 ) {
  //     rememberUnit = 1
  //     result += "0";
  //   } else if (rememberUnit && rememberUnit + an + bn == 3) {
  //     rememberUnit = 1;
  //     result += "1";
  //   } else {
  //     result += an + bn + rememberUnit;
  //     rememberUnit = 0;
  //   }

  // }

  // if (rememberUnit) {
  //   result += "1";
  // }

  // return result.split("").reverse().join("");

  let carryover = 0;
  let maxLength = Math.max(a.length, b.length);
  let result = Array(maxLength).fill(0);

  let i = 0;

  while (i < maxLength) {
    const sum =
      (a.length - 1 - i < 0 ? 0 : a[a.length - 1 - i] * 1) +
      (b.length - 1 - i < 0 ? 0 : b[b.length - 1 - i] * 1) +
      carryover;

    result[maxLength - 1 - i] = sum % 2;
    carryover = Math.floor(sum / 2);

    i += 1;
  }

  if (carryover) {
    result.unshift(1);
  }

  return result.join("");
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // let left = 1;
  // let right = x;

  // if (x < 2) {
  //   return x;
  // }

  // while (left < right) {
  //   let mid = left + Math.floor((right - left) / 2);

  //   if (mid * mid === x) {
  //     return mid;
  //   } else if (mid * mid > x) {
  //     right = mid;
  //   } else if (mid * mid < x) {
  //     left = mid + 1;
  //   }
  // }

  // return left - 1

  // let i = 0;
  // while (i * i < x) i++
  // console.log(i)
  // if (i * i != x) i--
  // return i;

  let i = 0;
  while (i <= x) {
    if (i * i === x) {
      return i;
    }
    if (i * i < x && (i + 1) * (i + 1) > x) {
      return i;
    }
    i++;
  }
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  /*
  const mapSymbol = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  const arrayOfSymbol = Object.keys(mapSymbol);
  let strNum = String(num);
  let result = "";

  for (let i = 0; i < strNum.length; i++) {
    let number = +strNum[i].padEnd(strNum.length - i, "0");

   
    for (let j = 0; j < arrayOfSymbol.length; j++) {
   
      if (number >= arrayOfSymbol[j] && number < arrayOfSymbol[j + 1]) {
        const numberToMinus = arrayOfSymbol[j].startsWith("5")
          ? arrayOfSymbol[j - 1]
          : arrayOfSymbol[j];

        if (arrayOfSymbol[j + 1] - numberToMinus === number) {
          result += mapSymbol[numberToMinus] + mapSymbol[arrayOfSymbol[j + 1]];
          break;

        } else {
          let multiplier = (number - arrayOfSymbol[j]) / numberToMinus;
          result +=
            mapSymbol[arrayOfSymbol[j]] +
            mapSymbol[numberToMinus].repeat(multiplier);
          break;

        }
      } else if (j == arrayOfSymbol.length - 1 && number >= arrayOfSymbol[j]) {

        let multiplier = number / arrayOfSymbol[j];
        result += mapSymbol[arrayOfSymbol[j]].repeat(multiplier);
      }
    }

  }
  return result;
  */

  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (key in map) {
    const repeatCounter = Math.floor(num / map[key]);
    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    num %= map[key];

    if (num === 0) return result;
  }

  return result;
};

/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);

  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const cache = {
  0: 1,
  1: 1,
};

const climbStairs = function (n) {
  //base cases
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};

function fibanachi(n) {
  const arr = [1, 1];
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
  //     const cache = {
  //   0: 1,
  //   1: 1,
  // };

  //   //base cases
  //   if (n <= 1) return 1;
  //   for (let i = 2; i <= n; i++) {
  //     cache[i] = cache[i - 1] + cache[i - 2];
  //   }
  //   return cache[n];
  const arr = [1, 1];
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // const oldNums = [...nums];
  // nums.sort((a, b) => a - b);

  // let i = 0;
  // let j = nums.length - 1;

  // while (i < j) {
  //   const item1 = nums[i];
  //   const item2 = nums[j];
  //   const sum = item1 + item2;
  //   if (sum === target) {

  //     const firstIndex = oldNums.findIndex((item) => item === item1);
  //     const secondIndex = oldNums.findIndex(
  //       (item, idx) => item === item2 && idx !== firstIndex
  //     );
  //     return [firstIndex, secondIndex];
  //   } else if (sum > target) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }

  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    // console.log(map, x, map[x]);
    if (map[x] != null) {
      return [map[x], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let i = 0; i <= numRows; i++) {
    let row = [];
    row[0] = row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle[numRows];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const triangle = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];
    row[0] = row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle[rowIndex];
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings1 = function (num1, num2) {
  let result = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += num1.charAt(i--) - "0";
    }

    if (j >= 0) {
      sum += num2.charAt(j--) - "0";
    }

    result.push(Math.floor(sum % 10));
    carry = Math.floor(sum / 10);
  }

  if (carry != 0) {
    result.push(carry);
  }

  return result.reverse().join("");
};

var addStrings = function (num1, num2) {
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");
  let result = [];
  let remain = 0;

  let arrayNumber1 = [...num1];
  let arrayNumber2 = [...num2];

  for (let i = arrayNumber1.length - 1; i >= 0; i--) {
    let numberSegment1 = arrayNumber1[i];
    let numberSegment2 = arrayNumber2[i];

    let subSum = numberSegment1 * 1 + numberSegment2 * 1 + remain;
    if (subSum > 9) {
      remain = Math.floor(subSum / 10);
      subSum = subSum - 10;
    } else {
      remain = 0;
    }

    result.unshift(subSum);
  }

  if (remain) {
    return [remain, ...result].join("");
  }

  return result.join("");
};

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // console.log(val);
  // this.stack.push(val);
  let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min;
  this.stack.push({ val, min: Math.min(min, val) });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // this.stack.pop();
  if (this.stack.length > 0) {
    this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // return this.stack[this.stack.length - 1];
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // return Math.min(...this.stack);
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min;
  }
};

var obj = new MinStack();

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//?167. Two Sum II - Input array is sorted
var twoSum2 = function (numbers, target) {
  // let startPos = 0;
  // let endPos = numbers.length - 1;

  // while (startPos < endPos) {
  //   let sum = numbers[startPos] + numbers[endPos];
  //   if (sum === target) {
  //     return [startPos, endPos];
  //   }

  //   if (sum > target) {
  //     endPos--
  //   } else {
  //     startPos++
  //   }
  // }

  for (let i = 0; i < numbers.length; i++) {
    let dif = target - numbers[i];
    let x = numbers.findIndex((item, idx) => item == dif && i !== idx);
    if (x !== -1) {
      return [i + 1, x + 1];
    }
  }
};

//? 49. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // let map = {};
  // let result = [];
  // let currentIndexArrayResult = 0;

  // for (let i = 0; i < strs.length; i++) {
  //   let word = Array.from([...strs[i]].sort()).join("");
  //   if (map[word] != undefined || map[word] != null) {
  //     result[map[word]].push(strs[i]);
  //   } else {
  //     map[word] = currentIndexArrayResult;
  //     result.push([strs[i]]);
  //     currentIndexArrayResult++;
  //   }
  // }

  // return result;
  // --------------
  // let cache = {};

  // for (let i = 0; i < strs.length; i++) {
  //   let word = strs[i];
  //   let sortedword = Array.from([...strs[i]].sort()).join("");
  //   if (cache[sortedword]) {
  //     cache[sortedword].push(word);
  //   } else {
  //     cache[sortedword] = [word];
  //   }
  // }

  // return Object.values(cache);
  // ------

  let cache = {};
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (let str of strs) {
    let Key = str
      .split("")
      .reduce((total, char) => total * primes[char.charCodeAt() - 97], 1);
    console.log(Key);
    !cache[Key] ? (cache[Key] = [str]) : cache[Key].push(str);
  }
  return Object.values(cache);
};

// 168. Excel Sheet Column Title
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // return alphabet[columnNumber - 1];
  let index = 0;
  let res = "";
  let colNum = columnNumber;

  while (colNum !== 0) {}
};

// 171. Excel Sheet Column Number
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  let index = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    res += Math.pow(26, index++) * columnTitle[i].charCodeAt(0) - 65 + 1;
  }
  return res;
};

//! 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // let n = Math.floor(nums.length / 2);
  // let map = {};

  // for (let i = 0; i < nums.length; i++) {
  //   const element = nums[i];
  //   if (map[element]) {
  //     map[element] = map[element] + 1;
  //   } else {
  //     map[element] = 1;
  //   }
  // }

  // for (let key in map) {
  //   if (map[key] > n) {
  //     return key;
  //   }
  // }

  let map = {};
  let n = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    map[elem] = map[elem] + 1 || 1;
    if (map[elem] > n) return elem;
  }
};

//! 172. Factorial Trailing Zeroes
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // if (n <= 0) return n;

  // function factorial(n) {
  //   if (n == 1) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  // }

  // let result = String(factorial(n));
  // console.log('result', result)
  // let zeroCount = 0;
  // for (let i = result.length - 1; i >= 0; i--) {
  //   const elem = result[i];
  //   if (elem == "0") {
  //     zeroCount += 1;
  //   } else {
  //     return zeroCount;
  //   }
  // }

  // let maxNumWhoDevide5 = null;
  // let result = 0;

  // for (let i = 0; i <= n; i += 5) {
  //   if (i % 5 == 0) {
  //     maxNumWhoDevide5 = Math.max(maxNumWhoDevide5, i);
  //   }
  // }

  // while (maxNumWhoDevide5 > 1) {
  //   maxNumWhoDevide5 = Math.floor(maxNumWhoDevide5 / 5)
  //   result += maxNumWhoDevide5;
  // }

  // return result
  let numOfFive = 0;

  while (n >= 5) {
    numOfFive += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return numOfFive;
};

//! 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // for (let i = 0; i < Math.floor(s.length / 2); i++) {
  //   let j = s.length - 1 - i;
  //   let tmp = s[i];
  //   s[i] = s[j];
  //   s[j] = tmp;
  // }
  // return s;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
  return s;
};

//! 326. Power of Three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // if (n < 1) return false
  // if (n == 1) return true;

  //   while (n % 3 == 0) {
  //     if (n === 3) return true;
  //     n = n / 3;
  //   }

  //   return false;
  if (n === 0) return false;
  while (n % 3 === 0) {
    n = n / 3;
  }

  return n === 1;
  // Если любое из чисел 3^1, 3^2, 3^3, 3^4 ....,3^19. Делится нацело на 3^19 это число можно получить путем возведение в степень 3
  //  if (n < 1) return false;
  //  return 3 ** 19 % n == 0;
};

//! 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // const primes = [
  //   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
  //   71, 73, 79, 83, 89, 97, 101,
  // ];
  // let total1 = 0;
  // let total2 = 0;

  // for (let i = 0; i < Math.max(s.length, t.length); i++) {
  //   let letter1 = s[i];
  //   let letter2 = t[i];
  //   if (!letter1 || !letter2) return false;

  //   total1 += primes[letter1.charCodeAt() - 97];
  //   total2 += primes[letter2.charCodeAt() - 97];
  // }

  // return total1 === total2
  if (s.length !== t.length) {
    return false;
  }
  let letterMap = {};
  for (let letter1 of s) {
    if (letterMap[letter1] === undefined) {
      letterMap[letter1] = 1;
    } else {
      letterMap[letter1]++;
    }
  }

  for (let letter2 of t) {
    if (letterMap[letter2] === undefined) {
      return false;
    }

    if (letterMap[letter2] < 1) {
      return false;
    }

    letterMap[letter2]--;
  }
  return true;
};

//! 231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //  if (n < 1) return false;

  //   while (n % 2 === 0) {
  //     console.log(n);
  //       n = Math.floor(n / 2);
  //   }
  //   return n === 1
  while (i < n) {
    i *= 2;
  }
  return i == n;
};

//! 1901. Find a Peak Element II
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const current = mat[i][j];
      const nextX = mat[i][j + 1] ? mat[i][j + 1] : -1;
      const prevX = mat[i][j - 1] ? mat[i][j - 1] : -1;
      const nextY = mat[i + 1] && mat[i + 1][j] ? mat[i + 1][j] : -1;
      const prevY = mat[i - 1] && mat[i - 1][j] ? mat[i - 1][j] : -1;
      if (
        current > nextX &&
        current > prevX &&
        current > nextY &&
        current > prevY
      ) {
        return [i, j];
      }
    }
  }
};

//! 217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // const map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   console.log(map);
  //   if (map[nums[i]]) {
  //     return true;
  //   } else {
  //     map[nums[i]] = true;
  //   }
  // }

  // return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      return true;
    }
  }

  return false;
};

//! 202. Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // console.log(n)
  // let sumOfNumber = n.toString().split('').reduce((acc, item) => acc + item**2, 0);
  // if (sumOfNumber === 1) {
  //   return true;
  // } else {
  //   return isHappy(sumOfNumber);
  // }

  // let map = {};
  // let sumOfNumber = n;
  // while (true) {
  //   sumOfNumber = sumOfNumber
  //     .toString()
  //     .split("")
  //     .reduce((acc, item) => acc + item ** 2, 0);

  //   console.log(sumOfNumber);
  //   if (sumOfNumber === 1) return true;
  //   if (map[sumOfNumber]) {
  //     return false;
  //   } else {
  //     map[sumOfNumber] = true;
  //   }
  // }

  let map = {};
  let tmp = 0;

  while (n !== 1 && !map[n]) {
    map[n] = true;
    tmp = 0;

    while (n > 0) {
      tmp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }

    n = tmp;
  }

  return n === 1;
};

//! 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
};

//? 1920. Build Array from Permutation
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // const maxElem = Math.max(...nums);
  // return nums.indexOf(maxElem);

  // let peakIndex = null;
  // for (let i = 0; i < nums.length; i++) {
  //   const elem = nums[i];
  //   const nextElem = nums[i + 1];
  //   if (elem > nextElem) {
  //     if (peakIndex !== null && elem > nums[peakIndex]) {
  //       peakIndex = i;
  //     }

  //     if (peakIndex === null) {
  //       peakIndex = i;
  //     }
  //   }
  // }

  // if (
  //   (nums[nums.length - 1] < nums[nums.length - 2] &&
  //     nums[nums.length - 1] > nums[peakIndex]) ||
  //   peakIndex === null
  // ) {
  //   return nums.length - 1;
  // }

  // return peakIndex;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }

  return nums.length - 1;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i] > arr[i + 1], arr[i] < arr[i - 1]);
    if (arr[i] >= arr[i + 1] && arr[i] <= arr[i - 1]) {
      return i;
    }
  }
};

var isHappy = function (n) {
  let map = {};
  let tmp = 0;

  while (n !== 1 && !map[n]) {
    map[n] = true;
    tmp = 0;

    while (n > 0) {
      tmp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }

    n = tmp;
  }

  return n === 1;
};

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

//! 303. Range Sum Query - Immutable
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let elem = this.nums[i];
    sum += elem;
  }

  return sum;
};

var obj = new NumArray([1, 2, 3, 4, 5, 6]);
var param_1 = obj.sumRange(0, 2);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      if (nums2[second] === undefined) {
        break;
      }
      nums1[i] = nums2[second];
      second--;
    }
  }
};

//! 643. Maximum Average Subarray I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // let sum = 0;
  // for (let i = 0; i < k; i++) {
  //   sum += nums[i];
  // }
  // let average = sum / k;
  // for (let i = 1; i < nums.length; i++) {
  //   if (i + k - 1 > nums.length - 1) {
  //     break;
  //   }
  //   sum = sum - nums[i - 1] + nums[i + k - 1]
  //   let localAverage = sum / k;
  //   average = Math.max(average, localAverage)
  // }
  // return average;
  //? Sliding window pattern
  let max = -Infinity;
  let soFar = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    soFar += nums[windowEnd];

    if (windowEnd - windowStart === k - 1) {
      let avg = soFar / k;
      max = Math.max(max, avg);
      soFar -= nums[windowStart];
      windowStart++;
    }
  }

  return max;
};

//! Maximum Number of Balloons
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let result = [];
  const map = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    if (map[letter] !== undefined) {
      map[letter]++;
    }
  }

  Object.entries(map).forEach(([key, value]) => {
    if (key === "l" || key === "o") {
      result.push(value / 2);
    }

    result.push(value);
  });

  return Math.floor(Math.min(...result));
};

//! 1275 Find Winner on a Tic Tac Toe Game
/**
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function (moves) {
  let result = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const check = (x, y, char) => {
    // in one array
    let res_x = [0, 1, 2].every((el) => result[el][x] === char);
    let res_y = [0, 1, 2].every((el) => result[y][el] === char);
    let diagonal_left = [
      [0, 0],
      [1, 1],
      [2, 2],
    ].every(([y, x]) => result[y][x] === char);
    let diagonal_right = [
      [0, 2],
      [1, 1],
      [2, 0],
    ].every(([y, x]) => result[y][x] === char);
    return res_x || res_y || diagonal_left || diagonal_right;
  };

  for (let i = 0; i < moves.length; i++) {
    const [y, x] = moves[i];

    if ((i + 1) % 2) {
      result[y][x] = "A";
      if (check(x, y, "A")) return "A";
    } else {
      result[y][x] = "B";
      if (check(x, y, "B")) return "B";
    }
  }

  if (moves.length === 9) {
    return "Draw";
  } else {
    return "Pending";
  }
};

//! 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // let count = 0;
  // let maxSum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   const item = nums[i];
  //   if (item === 1) {
  //     count++;
  //   }
  //   if (item === 0) {
  //     maxSum = Math.max(count, maxSum);
  //     count = 0;
  //   }
  // }
  // maxSum = Math.max(count, maxSum);
  // return maxSum;

  //* not my solution
  let max = 0;
  let currentNumberOfOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item === 1) {
      currentNumberOfOnes += 1;
      max = Math.max(currentNumberOfOnes, max);
    } else {
      currentNumberOfOnes = 0;
    }
  }

  return max;
};

//! 917. Reverse Only Letters
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  // s = s.split("");
  // let left = 0;
  // let right = s.length - 1;
  // let alphabet = "abcdefghijklmnopqrstuvwxyz";

  // while (left < right) {
  //   let leftItem = s[left];
  //   let rightItem = s[right];
  //   let leftValid = alphabet.includes(leftItem.toLowerCase());
  //   let rightValid = alphabet.includes(rightItem.toLowerCase());

  //   if (leftValid && rightValid) {
  //     let tmp = s[left];
  //     s[left] = s[right];
  //     s[right] = tmp;

  //     left++;
  //     right--;
  //   } else if (!leftValid && !rightValid) {
  //     left++;
  //     right--;
  //   } else if (leftValid && !rightValid) {

  //     right--;
  //   } else if (!leftValid && rightValid) {

  //     left++;
  //   }
  // }

  // return s.join("");

  ///TODO str.match(/[a-zA-z]/i)
  const regex = new RegExp(/[a-z]/i);
  let strArr = s.split("");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !regex.test(strArr[i])) {
      i++;
    }
    while (i < j && !regex.test(strArr[j])) {
      j--;
    }

    let tmp = strArr[i];
    strArr[i++] = strArr[j];
    strArr[j--] = tmp;
  }

  return strArr.join("");
};

//! 290. Word Pattern
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // можно взять hashmap для s
  const set = new Set();
  let map = {};
  let splitS = s.split(" ");
  if (pattern.length !== splitS.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    console.log("map:", map);
    let patternItem = pattern[i];
    let str = splitS[i];

    if (map[patternItem]) {
      if (str !== map[patternItem]) {
        return false;
      }
    } else {
      if (set.has(splitS[i])) {
        return false;
      }

      map[patternItem] = splitS[i];
      set.add(splitS[i]);
    }
  }

  return true;
};

//! 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let tmp = nums[i];
      nums[i] = nums[pointer];
      nums[pointer++] = tmp;
    }
  }
};

//! 349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // const result = [];

  // for (let elem of nums1) {
  //   if (nums2.includes(elem) && !result.includes(elem)) {
  //    result.push(elem);
  //   }
  // }

  // return result;
  const set = new Set(nums1);
  const intersection = new Set();
  for (let elem of nums2) {
    if (set.has(elem)) {
      intersection.add(elem);
    }
  }

  return Array.from(intersection);
};

//! 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let distanceBetween = j - i;
    let shorterLine = Math.min(height[i], height[j]);
    let localArea = shorterLine * distanceBetween;
    maxArea = Math.max(maxArea, localArea);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};

//! 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // nums.sort((a, b) => a - b);

  // for (let i = 0; i < nums.length; i++) {
  //   if (i === 0 && nums[i] >= 1) return --nums[i];

  //   if (nums[i] + 1 !== nums[i + 1]) {
  //     return nums[i] + 1;
  //   }
  // }

  // return nums[nums.length - 1] + 1;

  let set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return -1;
};

//! 844. Backspace String Compare
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sToArray = [...s];
  const tToArray = [...t];

  const sResult = [];
  const tResult = [];
  let backSpaceCountS = 0;
  let backSpaceCountT = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const elem = sToArray[i];

    if (elem === "#") {
      backSpaceCountS++;
    } else if (backSpaceCountS === 0 && elem !== "#") {
      sResult.unshift(elem);
    } else {
      backSpaceCountS--;
    }
  }

  for (let i = t.length - 1; i >= 0; i--) {
    const elem = tToArray[i];

    if (elem === "#") {
      backSpaceCountT++;
    } else if (backSpaceCountT === 0 && elem !== "#") {
      tResult.unshift(elem);
    } else {
      backSpaceCountT--;
    }
  }

  return tResult.join(" ") === sResult.join(" ");
};

// !155. Min Stack
var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min = this.data.length === 0 ? val : this.data[this.data.length - 1].min;
  this.data.push({ val, min: Math.min(min, val) });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.data.length === 0) {
    return;
  }

  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data[this.data.length - 1].min;
};

//! 394. Decode String
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let multiply = [];
  let tmpMult = "";
  let repeatStr = [];
  let solution = "";

  for (let char of s) {
    if (!isNaN(char)) {
      tmpMult = `${tmpMult}${char}`;
    } else if (char === "[") {
      multiply.push(tmpMult);
      tmpMult = "";

      repeatStr.push(solution);
      solution = "";
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multiply.pop());
    } else {
      solution += char;
    }
  }

  return solution;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if ("({[".includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let lastValue = stack[stack.length - 1];
      if (map[s[i]] === lastValue) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//! 496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  //   let result = [];

  //   for (let i = 0; i < nums1.length; i++) {
  //     let idxNums2 = nums2.findIndex((item) => item === nums1[i]);
  //     let foundedElem = nums2
  //       .slice(idxNums2)
  //       .find((elem) => elem > nums2[idxNums2]);
  //     if (foundedElem) {
  //       result.push(foundedElem);
  //     } else {
  //       result.push(-1);
  //     }
  //   }

  //   return result;

  const greatest = {};
  let stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      greatest[stack.pop()] = num;
    }

    stack.push(num);
  }
  let res = [];
  for (let num of nums1) {
    if (greatest[num]) {
      res.push([greatest[num]]);
    } else {
      res.push(-1);
    }
  }
  return res;
};

//! 232. Implement Queue using Stacks
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }

  this.stack1.push(x);

  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack1.length) {
    return this.stack1.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack1.length;
};

//! 225. Implement Stack using Queues

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let firstElem = null;
  while (this.queue1.length > 1) {
    this.queue2.unshift(this.queue1.pop());
  }

  firstElem = this.queue1.pop();

  while (this.queue2.length > 0) {
    this.queue1.unshift(this.queue2.pop());
  }

  return firstElem;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let firstElem = null;
  while (this.queue1.length > 1) {
    this.queue2.unshift(this.queue1.pop());
  }
  firstElem = this.queue1.pop();
  this.queue2.unshift(firstElem);

  while (this.queue2.length > 0) {
    this.queue1.unshift(this.queue2.pop());
  }

  // console.log('this.queue1.', this.queue1)
  return firstElem;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length;
};

//! 1700. Number of Students Unable to Eat Lunch
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const state = {
    0: 0,
    1: 0,
  };

  for (let i = 0; i < students.length; i++) {
    let item = students[i];
    state[item]++;
  }

  while (students.length > 0 && state[sandwiches[0]]) {
    let currentStudent = students.shift();
    if (currentStudent === sandwiches[0]) {
      sandwiches.shift();
      state[currentStudent]--;
    } else {
      students.push(currentStudent);
    }
  }

  return students.length;
};

//! 389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return t[i];
    }

    map[t[i]]--;
  }
};

const sda = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// return index if find a number
const binarySearch = (array, numToSearch) => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    // console.log("middle", array[middle]);

    if (array[middle] === numToSearch) {
      return middle;
    }

    if (array[middle] > numToSearch) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return -1;
};

// 16 true 14 false
//! 367. Valid Perfect Square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return 1;
  let left = 0;
  let right = num;
  let prev = null;

  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    if (prev !== null && prev === middle) {
      return false;
    } else {
      prev = middle;
    }

    if (middle * middle === num) {
      return true;
    }

    if (middle * middle > num) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return false;
};

//! 350. Intersection of Two Arrays II
var intersect = function (nums1, nums2) {
  const result = [];
  const map = {};
  let copyMap = {};

  for (let i = 0; i < nums1.length; i++) {
    const elem = nums1[i];
    if (map[elem] !== undefined) {
      map[elem]++;
    } else {
      map[elem] = 1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    const elem = nums2[j];
    if (map[elem]) {
      map[elem]--;
      if (map[elem] >= 0) {
        result.push(elem);
      }
    }
  }

  return result;
};
//! 287. Find the Duplicate Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[[nums[i]]]) {
      return nums[i];
    } else {
      map[nums[i]] = true;
    }
  }
};

//! 4. Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const mid = Math.floor((m + n) / 2);
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (nums1[i] !== undefined && nums2[j] !== undefined) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (nums1[i] !== undefined) {
    mergedArray.push(nums1[i]);
    i++;
  }

  while (nums2[j] !== undefined) {
    mergedArray.push(nums2[j]);
    j++;
  }

  if ((m + n) % 2) {
    return mergedArray[mid];
  } else {
    return (mergedArray[mid] + mergedArray[mid - 1]) / 2;
  }
};

//! 645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = {};
  const maxElem = Math.max(...nums);
  let repeated, missed;
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (map[elem]) {
      map[elem]++;
    } else {
      map[elem] = 1;
    }
  }

  for (let i = 1; i <= maxElem; i++) {
    if (map[i] === 2) {
      repeated = i;
    }

    if (!map[i]) {
      missed = i;
    }
  }

  if (!missed) {
    missed = maxElem + 1;
  }
  return [repeated, missed];
};

//! 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /*
  let cur = null;
  let profit = 0;

  while (prices.length) {
    const pricePerDay = prices.shift();

    if (cur === null) {
      cur = pricePerDay;
    }

    if (pricePerDay > cur) {
      profit = pricePerDay - cur > profit ? pricePerDay - cur : profit;
    } else {
      cur = pricePerDay;
    }
  }

  return profit;
  */

  let cur = null;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const pricePerDay = prices[i];

    if (cur === null) {
      cur = pricePerDay;
    }

    if (pricePerDay > cur) {
      profit = pricePerDay - cur > profit ? pricePerDay - cur : profit;
    } else {
      cur = pricePerDay;
    }
  }

  return profit;

  /*
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
  */
};

//! 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /*
  let profit = 0;
  let localMin = null;
  for (let i = 0; i < prices.length; i++) {
    let prev = prices[i - 1];
    let cur = prices[i];
    let next = prices[i + 1];

    if (localMin === null) {
      if (
        (cur < next && (prev !== undefined ? cur < prev : true)) ||
        (cur < next && cur === prev)
      ) {
        localMin = prices[i];
      }
    } else {
      let nextElemAfterCur = null;
      if (cur === next) {
        prices.slice(i).find((item) => item !== cur);
      }

      if (
        ((cur > prev || cur === prev) && (next ? cur > next : true)) ||
        (cur > prev && cur === next && nextElemAfterCur !== undefined
          ? nextElemAfterCur < cur
          : i === prices.length - 1
          ? cur
          : false)
      ) {
        profit += cur - localMin;
        localMin = null;
      }
    }
  }

  return profit;
  */

  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let maxProfit = 0;

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    maxProfit += peak - valley;
  }

  return maxProfit;

  /*
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
  */
};

//! 767. Reorganize String

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  // создать объект ключ буква значение
  // каждым шагом находить букву с наибольшим количевством входов -> конкатенировать -> отнимать в объекте значение
};

console.log(reorganizeString("vvvlo"));

// "vvvlo" = "vlvov"
// "aab" = "bab"
// "aaab" = ""
