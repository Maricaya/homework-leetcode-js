/*
Symbol ( [ description ] )

When Symbol is called with optional argument description, the following steps are taken:

1. If NewTarget is not undefined, throw a TypeError exception.
2. If description is undefined, var descString be undefined.
3. Else, var descString be ToString(description).
4. ReturnIfAbrupt(descString).
5. Return a new unique Symbol value whose [[Description]] value is descString.

*/
(function() {
    var root = this;
    // Symbol 不会出现同名的属性
    var generateName = (function(){
        var postfix = 0;
        return function(descString){
            postfix++;
            return descString + postfix
        }
    })()

    function SymbolPolyfill(description) {
        // 1
        if (this instanceof SymbolPolyfill) throw new TypeError("Symbol is not a constructor")

        // 2 & 3
        var descriptionString = description === undefined ? undefined : String(description);

        var symbol = Object.create({
            // 实现 Symbol.toString
            toString: function() {
                return this.__Name__
            },
            valueOf: function() {
                throw new Error("Cannot convert a Symbol value")
            }
        })

        // 5
        Object.defineProperties(symbol, {
            "__Description__": {
                value: descriptionString,
                writable: false,
                enumerable: false,
                configurable: false,
            },
            "__Name__": {
                value: generateName(descriptionString),
                writable: false,
                enumerable: false,
                configurable: false
            }
        })

        return symbol
    }
    return root.SymbolPolyfill = SymbolPolyfill
}())

// test
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = SymbolPolyfill(obj);

console.log({sym}); // Symbol(abc)
console.log("sym.toString(): ", sym.toString()); // Symbol(abc)


// === 没有参数 ===
var s1 = SymbolPolyfill();
var s2 = SymbolPolyfill();

console.assert(s1 !== s2);

// === 有参数的 ===
var s3 = SymbolPolyfill('foo');
var s4 = SymbolPolyfill('foo');

console.assert(s3 !== s4);

// === 不会出现同名的属性 ===
var a = SymbolPolyfill('foo');
var b = SymbolPolyfill('foo');

console.log(a ===  b); // false

var o = {};
o[a] = 'hello';
o[b] = 'hi';

console.log(o); // {Symbol(foo): 'hi'}

// === 不能和其他值运算 ===
console.log('1' + symbol); // 报错
