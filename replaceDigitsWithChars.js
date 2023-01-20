const s = 'a2c1e1';
const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const shift = (c, x) => alpha[alpha.indexOf(c) + parseInt(x, 10)];

const replaceDigits = (s) => {
  let res = [];
  let i = 0,
    j = 1;
  while (j < s.length + 1) {
    res.push(s[i]);
    s[j] ? res.push(shift(s[i], s[j])) : null;
    i += 2;
    j += 2;
  }
  return res;
};

console.log(replaceDigits(s));
