/**
 * @param {code} string
 * @returns {any} AST
 */
function parse(code) {
  const _code = code.trim()
  const regex = /^<\s*([^\s/]+)\s*>([^>]*)<\s*\/\s*\1\s*>$/m;
  let ast = {};
  if (regex.test(_code)) {
    _code.replace(regex, (match, tag, content) => {
      ast = { tag, content };
      return match;
    });
  } else {
    throw new Error('');
  }

  return ast;
}

/**
 * @param {any} your AST
 * @returns {string}
 */
function generate(ast) {
  const {tag, content} = ast;
  if (content) {
    return `h('${tag}', null, '${content}')`
  } else {
    return `h('${tag}', null)`
  }
}