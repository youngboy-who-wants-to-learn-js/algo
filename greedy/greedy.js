//  типы значений монет, 100p is £1
const denominations = [1, 2, 5, 10, 20, 50, 100];
// [6, 3, 0, 0, 0, 0, 0] - 6 монет 1p и 3 монеты 2р

const returnChange = (change, denominations) => {
  let toGiveBack = Array(denominations.length).fill(0);
  for (let i = denominations.length - 1; i >= 0; i--) {
    let coin = denominations[i];
    while (coin <= change) {
      change = change - coin;
      toGiveBack[i] += 1;
    }
  }

  return toGiveBack;
};

console.log(returnChange(30, denominations));
