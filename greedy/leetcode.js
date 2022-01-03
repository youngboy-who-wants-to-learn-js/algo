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
