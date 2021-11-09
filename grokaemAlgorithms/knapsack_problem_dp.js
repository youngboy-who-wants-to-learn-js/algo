/**
                { Предыдущий Max ( то есть ячейка над текущей: Ячейка [i-1][j] )
Ячейка [i][j] = {  
                {  Стоимость текущей вещи +  стоимость оставшегося места: Ячейка [i-1]  
 
 */
const weights = [4, 1, 3];
const values = [4000, 2500, 2000];

function countMax(weights, values, maxCapacity) {
  let arr = Array(weights.length).fill(Array(maxCapacity).fill(null));
  console.log(arr);
  // проходим по вещам
  for (let i = 0; i < weights.length; i++) {
    // проходим по рюкзакам
    for (let j = 0; j < maxCapacity; j++) {
      // попадаем на ячейку пустышку
      if (i == 0 || j == 0) {
        arr[i][j] = 0;
      } else {
        //если вес текущей вещи больше размера рюкзака
        //казалось бы откуда значение возьмется для первой вещи
        //при таком условии. А оно возьмется из ряда пустышки
        if (weights[i - 1] > j) {
          arr[i][j] = arr[i - 1][j];
        } else {
          //здесь по формуле. Значение над текущей ячейко
          let prev = arr[i - 1][j];
          //Значение по вертикали: ряд вверх
          //и по горизонтали: вес рюкзака - вес текущей вещи
          let byFormula = values[i - 1] + arr[i - 1][j - weights[i - 1]];
          arr[i][j] = Math.max(prev, byFormula);
        }
      }
    }
  }

  return arr[weights.length - 1][maxCapacity - 1];
}

// console.log(countMax(weights, values, 4));

{
  const weights = [4, 3, 1];
  const scores = [3000, 2000, 1500];
  /**
   * @param {Array.<Number>} scores Стоимости предметов
   * @param {Array.<Number>} weights Веса предметов
   * @param {Number} capacity Грузоподъемность
   * @return {Number} Максимальная стоимость предметов, вмещающихся в рюкзак
   */

  function countMax(scores, weights, capacity) {
    let n = weights.length;
    let dp = new Array(capacity + 1);

    for (let i = 0; i <= capacity; i += 1) {
      dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= capacity; j += 1) {
        if (weights[i - 1] <= j) {
          dp[j][i] = Math.max(
            dp[j][i - 1],
            dp[j - weights[i - 1]][i - 1] + scores[i - 1]
          );
        } else {
          dp[j][i] = dp[j][i - 1];
        }
      }
    }

    return dp[capacity][n];
  }

  console.log(countMax(weights, scores, 4));
}
