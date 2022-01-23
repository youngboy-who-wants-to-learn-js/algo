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
