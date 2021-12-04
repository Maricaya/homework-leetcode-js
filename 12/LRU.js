/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1;
  }
  const v = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, v)
  return this.cache.get(key)
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    console.log("this.cache", this.cache.keys())
    console.log("this.cache", this.cache.keys().next())
    console.log("this.cache", this.cache.keys().next().value)

    // keys().next().value returns first item's key
    this.cache.delete(this.cache.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
