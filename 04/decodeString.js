/**
 * @param {string} s
 * @return {string}
 */
// const decodeString = function (s) {
//     const stack = [];
//     let result = "";
//     let multi = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (!isNaN(Number(s[i]))) {
//             multi = multi * 10 + Number(s[i])
//         } else if (s[i] === '[') {
//             stack.push([multi, result])
//             result = ""
//             multi = 0;
//         } else if (s[i] === ']') {
//             const [curMulti, lastResult] = stack.pop();
//             result = lastResult + result.repeat(curMulti)
//         } else {
//             result += s[i]
//         }
//     }
//     return result;
// };
const decodeString = function (s) {
    const stack = []
    let num = 0, resString = ''
    for(let char of s){
        if(!isNaN(Number(char))){
            num += num * 10 + Number(char)
        }else  if(char === '['){
            stack.push([resString, num])
            resString = ''
            num = 0
        }else if(char === ']'){
            const [currentString, currentNum] = stack.pop()

            resString = currentString + resString.repeat(currentNum)
        }else{
            resString += char
        }
    }
    return resString
}

console.log("111111", decodeString("32[a]2[bc]"));