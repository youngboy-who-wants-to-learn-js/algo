let lengthOfLongestSubString = function (s) {
  let leftWindow = 0;
  let longest = 0;
  let counts = {};

  for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
    if (!counts[s[rightWindow]]) {
      counts[s[rightWindow]] = 0;
    }

    counts[s[rightWindow]] += 1;

    if (Object.values(counts).some((element) => element > 1)) {
      counts[s[leftWindow]] -= 1;

      leftWindow += 1;
    }

    longest = Math.max(longest, rightWindow - leftWindow + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubString("pwwkew"));
