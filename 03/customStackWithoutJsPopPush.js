/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack[this.stack.length] = x;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        const returnVal = this.stack[this.stack.length - 1];
        delete this.stack[this.stack.length - 1];
        this.stack.length = this.stack.length - 1;
        return returnVal;
    } else {
        return -1;
    }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for (let i = 0; i < k; i++) {
        if (this.stack[i]) {
            this.stack[i] += val;
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */