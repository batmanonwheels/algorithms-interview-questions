function solution(str) {
  let result = [];
  for (i = 0; i <= str.length; i = i + 2) {
    console.log(i);
    let substr = str.slice(i, i + 2);
    substr.length > 0
      ? result.push(substr.length > 1 ? substr : substr + '_')
      : null;
  }
  return result;
}
console.log(solution('asdfa'));
