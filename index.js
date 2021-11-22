class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    if (pos >= this.length) {  
      throw new Error('OutOfBounds'); 
    } else { 
      return this.items[pos];
    }
  }

  max() {
    if (this.length == 0) {  
      throw new Error('EmptySortedList');
    } else { 
      let max = Math.max(...this.items);
      return max; 
    }
  }

  min() {
    if (this.length == 0) {  
      throw new Error('EmptySortedList');
    } else { 
     let min = Math.min(...this.items);
     return min; 
    }
  }

  
  sum() {}

  avg() {}
}

module.exports = SortedList;
