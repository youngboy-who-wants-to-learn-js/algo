const allowedCoins = [1, 2, 5, 10, 20, 50];

const coffeePrices = {
  americano: 0.95,
  americanoWithMilk: 1.26,
  cappuccino: 2.33,
};

const sellCoffee = (inputMoney, coffeeType) => {
  const priceInCoins = inputMoney * 100;
  const coffeePriceInCoins = coffeePrices[coffeeType] * 100;

  let rest = priceInCoins - coffeePriceInCoins;

  if (!coffeePriceInCoins) {
    return new Error("coffee doesn't exist");
  }

  if (rest < 0) {
    return new Error("didn't have enough money");
  }

  if (rest === 0) {
    return;
  }

  const resultChange = [];
  for (let i = allowedCoins.length - 1; i >= 0; i--) {
    const coin = allowedCoins[i];

    while (rest >= coin) {
      rest -= coin;
      resultChange.push(coin);
    }
  }

  return resultChange;
};

const findTheLongestUpwardTrend = (array) => {
  if (!Array.isArray(array)) {
    return new Error(`it's not an array`);
  }

  if (!array.length) {
    return array;
  }

  let startSequence = 0;
  let endSequence = 0;

  let start = 0;
  let end = 0;

  for (let i = 1; i < array.length; i++) {
    const currentItem = array[i];
    const prevItem = array[i - 1];

    if (currentItem > prevItem) {
      endSequence = i;
      let diff = endSequence - startSequence;
      if (end - start < diff) {
        start = startSequence;
        end = endSequence;
      }
    } else {
      startSequence = i;
    }
  }

  return array.slice(start, end + 1);
};
