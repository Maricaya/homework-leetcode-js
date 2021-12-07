/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  let res = input
  while (res.includes("b") || res.includes("ac")) {
    if (res.includes("b")) {
      res = res.replace("b", "")
    }
    if (res.includes("ac")) {
      res = res.replace("ac", "")
    }
  }
  return res
}
// b/ac
removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'