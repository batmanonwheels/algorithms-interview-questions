const count = (string) => {
  let res = {};
  string
    .split('')
    .sort()
    .map(
      (e) => (res[e] = string.split('').filter((char) => char === e).length)
    );
  return res;
};

console.log(count(''));
