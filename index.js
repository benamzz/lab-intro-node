class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return (a - b);
    });
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
