class MySet {
  constructor(array) {
    if (array !== undefined && !Array.isArray(array)) {
      throw new Error("Array expected");
    }

    let unique = [];
    if (array !== undefined) {
      if (array.length > 1) {
        unique = array.reduce(
          (acc, elem) => (!acc.includes(elem) ? acc.concat(elem) : acc),
          []
        );
      } else {
        unique = array;
      }
    }

    this.data = unique ?? [];
    this._size = unique.length || 0;
  }

  get size() {
    return this._size;
  }

  add(value) {
    const isExists = this.data.includes(value);
    if (!isExists) {
      this.data.push(value);
      this._size++;
    }
  }

  has(value) {
    return this.data.includes(value);
  }

  remove(value) {
    this.data = this.data.filter((el) => el !== value);
    this._size--;
  }

  clear() {
    this.data = [];
    this._size = 0;
  }

  values() {
    return this.data;
  }
}

// множество является суперсетом если элементы набора А занимают набор В. Все элементы B , есть в А
function isSuperSet(A, B) {
  for (let elem of B.values()) {
    console.log(elem, A);
    if (!A.has(elem)) {
      return false;
    }
  }

  return true;
}

// Объединение ( Union ) двух заданных наборов является наименьшим набором, который содержит все элементы обоих наборов. Объединение двух заданных множеств A и B - это набор, который состоит из всех элементов A и всех элементов B, так что ни один элемент не повторяется.
function union(A, B) {
  let _union = new MySet(A.values());

  for (let elem of B.values()) {
    _union.add(elem);
  }

  return _union;
}

// intersection - Метод возвращает набор, содержащий сходство между двумя или более наборами.
function intersection(A, B) {
  let _intersection = new MySet();
  for (let elem of A.values()) {
    if (B.has(elem)) {
      _intersection.add(elem);
    }
  }

  return _intersection;
}

// Метод symric_difference возвращает симметричную разность двух наборов.
// Симметричная разность двух множеств А а также B это набор элементов, которые находятся либо в А или B, но не на их пересечени
function symmetricDifference(A, B) {
  // let _symmetricDifference = new MySet();

  // for (let elem of A.values()) {
  //   if (!B.has(elem)) {
  //     _symmetricDifference.add(elem);
  //   }
  // }

  // for (let elem of B.values()) {
  //    if (!A.has(elem)) {
  //      _symmetricDifference.add(elem);
  //    }
  // }

  // return _symmetricDifference;
  let _symmetricDifference = new MySet(A.values());
  for (let elem of B.values()) {
    if (_symmetricDifference.has(elem)) {
      _symmetricDifference.remove(elem);
    } else {
      _symmetricDifference.add(elem);
    }
  }
  return _symmetricDifference;
}
// The difference between the two sets in Python is equal to the difference between the number of elements in two sets. The function difference() returns a set that is the difference between two sets. Then (set A – set B) will be the elements present in set A but not in B and (set B – set A) will be the elements present in set B but not in set A.
function difference(A, B) {
  let _difference = new MySet(A.values());

  for (let elem of B.values()) {
    _difference.remove(elem);
  }

  return _difference;
}

const A = new MySet([10, 20, 30, 40, 80]);
const B = new MySet([100, 30, 80, 40, 60]);

