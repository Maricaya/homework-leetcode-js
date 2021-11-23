// 算法题：https://leetcode-cn.com/problems/implement-queue-using-stacks/
//   手写题：https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

var MyQueue = function() {
  this.input = []
  this.output = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while(this.input.length !== 0){
    this.output.push(this.input.pop())
  }
  const pop = this.output.pop()
  while(this.output.length !== 0){
    this.input.push(pop)
  }
  return pop
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while(this.input.length !== 0){
    this.output.push(this.input.pop())
  }

  const pop = this.output.pop()
  this.output.push(pop)

  while(this.output.length !== 0){
    this.input.push(pop)
  }

  return pop
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.input.length === 0 && this.output.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */