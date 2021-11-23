class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    if (init[0] === '?') {
      init = init.slice(1)
    }

    const arr = init.split("&")

    this.queue = [];

    arr.forEach(item => {
      this.queue.push(item.split("="));
    })
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    this.queue.push([name, String(value)]);
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.queue = this.queue.filter(([key]) => key !== name)
  }

  /**
   * @returns {Iterator}
   */
  * entries() {
    for (let i = 0; i < this.queue.length; i++) {
      yield this.queue[i]
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    this.queue.forEach(([key, value]) => {
      callback(value, key)
    })
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    const target = this.queue.find(([key]) => key === name)
    return target ? target[1] : null;
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.queue.filter(([key]) => key === name).map(i => String(i[1]))
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return !!this.queue.find(([key]) => key === name)
  }

  /**
   * @return {Iterator}
   */
  * keys() {
    const allKeys = this.queue.map(([key]) => key);
    for(let key of allKeys){
      yield key;
    }
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    const targetIndex = this.queue.findIndex(([key]) => key === name);
    if (targetIndex >= 0){
      this.queue[targetIndex][1] = String(value);
    }else{
      this.append(name, value);
    }
  }

  // sor all key/value pairs based on the keys
  sort() {
    this.queue = this.queue.sort((i, j) => i[0] < j[0] ? -1 : 1);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.queue.map(([key, val]) => `${key}=${val}`).join('&');
  }

  /**
   * @return {Iterator} values
   */
  * values() {
    const values = this.queue.map(([,val])=>val);
    for(let val of values){
      yield val;
    }
  }
}

const params = new MyURLSearchParams('?a=1&a=2&b=2')
params.get('a') // '1'
params.getAll('a') // ['1', '2']
params.get('b') // '2'
params.getAll('b') // ['2']


params.append('a', 3)
params.set('b', '3')
params.toString() // 'a=1&a=2&b=3&a=3'