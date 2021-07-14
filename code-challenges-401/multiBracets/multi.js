const MultiBracket = (string) => {
  const stack = [];
  const openBracket = ['(', '{', '['];
  const closeBracet = [')', '}', ']'];

  string.split('').forEach((val) => {
    if (openBracket.includes(val)) {
      stack.push(val);
    }
    if (closeBracet.includes(val)) {
      const current = openBracket[closeBracet.indexOf(val)];
      stack[stack.length - 1] === current
        ? stack.splice(-1, 1)
        : stack.push(val);
    }
  });
  return stack.length === 0;
};

module.exports = MultiBracket;
