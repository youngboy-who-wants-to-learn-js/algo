//! 767. Reorganize String

/**
 * @param {string} s
 * @return {string}
 */

var reorganizeString = function (s) {
  let result = "";
  const letters = [...new Set(s)];
  const amount = new Array(letters.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    const elem = s[i];
    const indexOfElem = letters.indexOf(elem);
    amount[indexOfElem] += 1;
  }

  while (result.length !== s.length) {
    let max = -Infinity;
    let index;
    for (let i = 0; i < amount.length; i++) {
      const element = amount[i];
      if (
        element > max &&
        result[result.length - 1] !== letters[i] &&
        element !== 0
      ) {
        max = element;
        index = i;
      }
    }
    if (max === -Infinity) {
      result = "";
      break;
    }
    result += letters[index];
    amount[index] -= 1;
  }

  return result;
};

//! 55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /*
  let positionIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const step = nums[i];

    if (positionIndex === i) {
      if (positionIndex + step >= nums.length - 1) {
        return true;
      }

      let maxNumber = -Infinity;
      for (let j = i + 1; j < i + step + 1; j++) {
        const elem = nums[j];

        if (elem > maxNumber || elem === maxNumber) {
          let canStep = true;
          let result = "";
          for (let x = j + 1; x < j + 1 + nums[j]; x++) {
            result += nums[x];
            if (x === nums.length - 1) {
              return true;
            }
          }
          canStep = "0".repeat(j + 1 + nums[j] - (j + 1)) === result;
          if (!canStep) {
            maxNumber = elem;
            positionIndex = j;
          }
        }
      }
    }
  }

  return positionIndex === nums.length - 1;
  */

  let lastGoodIndexPos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndexPos) {
      lastGoodIndexPos = i;
    }
  }

  return lastGoodIndexPos === 0;
};

// ! 452. Minimum Number of Arrows to Burst Balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  let periods = 0;
  let minEndOfInterval = null;

  for (let i = 0; i < points.length; i++) {
    const balloon = points[i];
    if (!(minEndOfInterval >= balloon[0] && periods !== 0)) {
      periods += 1;
      minEndOfInterval = balloon[1];
    }
  }

  return periods;
};
