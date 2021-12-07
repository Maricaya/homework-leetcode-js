/*
* 实现一个LazyMan，可以按照以下方式调用:
 LazyMan(“Hank”)输出:
 Hi! This is Hank!

 LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
 Hi! This is Hank!
 //等待10秒..
 Wake up after 10
 Eat dinner~

 LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 Hi This is Hank!
 Eat dinner~
 Eat supper~
 LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
 //等待5秒
 Wake up after 5
 Hi This is Hank!
 Eat supper
*
* */
class LazyMan {
  constructor(name) {
    this.name = name
    this.sayHello(name)
  }

  sayHello(name) {
    setTimeout(() => {
      console.log(`Hi! This is ${name}!`)
    }, 0)
    return this
  }

  sleep(seconds) {
    const delay = seconds * 1000;
    const time = Date.now();

    setTimeout(() => {
      while (Date.now() - time < delay) {
        // sleeping
      }
      console.log(`Wake up after ${seconds}`)
    }, 0)
    return this
  }

  eat(meal) {
    setTimeout(() => {
      console.log(`Eat ${meal}~!`)
    }, 0)
    return this
  }

  sleepFirst(seconds) {
    const delay = seconds * 1000;
    const time = Date.now();
    while (Date.now() - time < delay) {
      // sleeping
    }
    console.log(`Wake up after ${seconds}`)
    return this
  }
}

// new LazyMan("Hank")

// new LazyMan("Hank").sleep(1).eat("dinner")
/*
* Hi! This is Hank!
 // 等待10秒..
 Wake up after 10
 Eat dinner~
* */

// new LazyMan("Hank").eat("dinner").eat("supper")
// Hi This is Hank!
//   Eat dinner~
//   Eat supper~

new LazyMan("Hank").eat("supper").sleepFirst(2)
//等待5秒
// Wake up after 5
// Hi This is Hank!
//   Eat supper