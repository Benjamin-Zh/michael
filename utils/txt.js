const txt = {
  br(count = 1) {
    return '\n'.repeat(count);
  },
  ul(items = [], { indent = 2, withDot = true } = {}) {
    return items
      .map(item => `${' '.repeat(indent)}- ${item}${withDot ? '.' : ''}`)
      .join(txt.br);
  },
};

Object.setPrototypeOf(txt.br, {
  toString() { return '\n'; },
});

module.exports = txt;
