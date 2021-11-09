class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  // На случай, если value будет объект иначе [object Object]
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  // Первый узел в связном списке обычно называется head, последний tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //? Prepend метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в начало связного списка
  prepend(value) {
    // Создаём новый узел, который будет новым head,
    // при создании передаем второй аргумент, который указывает
    // что его "next" будет текущий head,
    // так как новый узел будет стоять перед текущем head.
    const newNode = new LinkedListNode(value, this.head);
    // Переназначаем head на новый узел
    this.head = newNode;
    // Если ещё нет tail, делаем новый узел tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    // возвращаем весь список
    return this;
  }

  //? Append метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка
  append(value) {
    const newNode = new LinkedListNode(value);
    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.
    this.tail.next = newNode;
    // Переназначаем tail на новый узел.
    this.tail = newNode;

    return this;
  }
  //TODO переписать удаление
  //Delete метод принимает значение в качестве аргумента, удаляет все узлы, которые имеют указаное значение и возвращает последний удалённый узел.
  delete(value) {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // Если head должен быть удален, то делаем следующий узел новым head.

    while (this.head && this.head.value === value) {
      deletedNode = this.head;

      // Переназначаем следующий за head узел на новый head.
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // Если следующий узел должен быть удален,
    // делаем узел через один, следующим для проверки.
    // Перебираем все узлы и удаляем их, если их значение равно указанному.
    if (currentNode !== null) {
      while (currentNode) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;

          // Перезаписываем, чтобы узел через один стал следующим узлом.
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
      }
    }
    // else {
    // currentNode = currentNode.next;
    // }

    // Проверяем, должен ли tail быть удален.
    // Так как, если в цикле мы удаляем последний узел,
    // то с предпоследнего узла убираем только ссылку на него.
    // Поэтому делаем проверку на его удаление с "tail".
    if (this.tail && this.tail.value === value) {
      // в данном случае currentNode это или предпоследний узел или head.
      this.tail = currentNode;
    }

    return deletedNode;
  }

  //? Find метод принимает значение в качестве аргумента, находит первый узел с таким же значением и возвращает его.
  find(value) {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  //? DeleteTail - метод, который удаляет последний узел из списка и возвращает его.
  deleteTail() {
    // Если нет tail, значит список пуст.

    if (!this.tail) {
      return null;
    }

    const deletedTail = this.tail;
    // Если head и tail равны, значит в списке только один узел.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // Если в связном списке много узлов.
    // Перебираем все узлы и находим предпоследний узел,
    // убираем ссылку «next» на последний узел.
    let currentNode = this.head;
    while (currentNode.next) {
      // Если у следующего узла нет следующего узла,
      // значит текущий узел предпоследний.
      if (!currentNode.next.next) {
        // убираем ссылку «next» на последний узел.
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    // В данном случае currentNode - это предпоследний узел или head,
    // который становится последним узлом.
    this.tail = currentNode;
    return deletedTail;
  }

  //? DeleteHead - метод, который удаляет из списка первый узел и возвращает его.
  deleteHead() {
    // Если нет head значит список пуст
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  //? FromArray - принимает массив значений в качестве аргумента и создаёт новые узлы из каждого элемента массива, по очереди добавляя их в конец списка.
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  //? ToArray - метод, что создаёт массив из всех узлов и возвращает его.
  toArray() {
    const nodes = [];

    let currentNode = this.head;

    // Перебираем все узлы и добавляем в массив.
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  //? ToString - принимает обратный вызов в качестве аргумента (не обязательно) и создаёт строку из всех значений узлов.
  toString(callback) {
    // Сначала создаём массив из всех узлов.

    // На каждом узле вызываем метод toString
    // что бы получить значение в виде строки.
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
    // Вызываем метод toString на массиве строк.
  }

  // Обратный список
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    // Перебираем все узлы
    while (currNode) {
      // Сохраняем следующий узел
      nextNode = currNode.next;
      // Меняем ссылку на следующий "next" узел текущего узла,
      // чтобы он ссылался на предыдущий узел.
      // Так как мы меняем их местами, нужно поменять и ссылки на узлы.
      // Изначально, первый узел не имеет предыдущего узла,
      // поэтому после перестановки его "next" станет "null".
      currNode.next = prevNode;
      // Перемещаем узлы prevNode и currNode на один шаг вперед.

      // Текущий узел делаем предыдущим.
      prevNode = currNode;

      // Следующий узел становится текущим
      currNode = nextNode;
    }

    // Следующий узел становится текущим.
    this.tail = this.head;

    // В данном случае prevNode это последний узел,
    // поэтому, после reverse, он становится первым.
    this.head = prevNode;
    return this;
  }
}

{
  class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = null;
    }

    append(data) {
      const node = new Node(data);

      if (!this.head) {
        this.head = node;
      }

      if (this.tail) {
        this.tail.next = node;
      }

      this.tail = node;
      this.length++;
    }

    prepend(data) {
      const node = new Node(data, this.head);

      if (!this.tail) {
        this.tail = node;
      }

      this.head = node;
    }

    find(data) {
      if (!this.head) {
        return null;
      }

      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;
        }

        current = current.next;
      }

      return null;
    }

    insertAfter(after, data) {
      const found = this.find(after);

      if (!found) {
        return null;
      }

      // let node = new Node(data, found.next);
      // found.next = node
      found.next = new Node(data, found.next);
    }

    remove(data) {
      if (!this.head) {
        return;
      }

      while (this.head && this.head.data === data) {
        this.head = this.head.next;
      }

      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }

      if (this.tail.data === data) {
        this.tail = current;
      }
    }

    reverse() {
      let prev;
      let current = this.head;

      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;

        current = next;
      }
      this.tail = this.head;
      this.head = prev;
    }

    toArray() {
      const output = [];
      let current = this.head;

      while (current) {
        output.push(current.data);

        current = current.next;
      }

      return output;
    }

    insertAtIndex(index, val) {
      if (index === 0) {
        this.head = new Node(val, this.head);
        this.length++;
        return;
      }

      let current = this.head;
      let i = 0;
      while (i < this.length) {
        if (i + 1 === index) {
          console.log(current, i, "i - 1");
          current.next = new Node(val, current.next);
          this.length++;
          return;
        }

        i++;
        current = current.next;
      }

      return null;
    }
  }

  const list = new LinkedList();
  // list.append(1);
  // list.append(2);
  list.insertAtIndex(0, 10);
  list.insertAtIndex(0, 20);
  list.insertAtIndex(1, 30);

  console.log(list);
}
