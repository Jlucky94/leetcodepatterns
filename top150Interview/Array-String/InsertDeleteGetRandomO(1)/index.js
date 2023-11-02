var RandomizedSet = function () {
    this.map = new Map();
    this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false
    }
    this.map.set(val, this.array.length)
    this.array.push(val)
    return true
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false
    let idx = this.map.get(val)
    let lastElement = this.array[this.array.length-1]
    this.array[idx] = lastElement
    this.array.pop()
    this.map.set(lastElement, idx)
    this.map.delete(val)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const randomSet = new RandomizedSet();
console.log(randomSet.insert(3));
console.log(randomSet.remove(3));
console.log(randomSet.remove(0));
console.log(randomSet.insert(3));
console.log(randomSet.getRandom());
console.log(randomSet.remove(0));