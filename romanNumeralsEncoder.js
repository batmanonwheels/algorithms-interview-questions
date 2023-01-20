// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

const symbols = [
  'M',
  'CM',
  'D',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];
const numbers = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const numerals = {
//   1000: 'M',
//   500: 'D',
//   100: 'C',
//   50: 'L',
//   10: 'X',
//   5: 'V',
//   1: 'I',
// };

const solution = (val) => {
  return val
    .toString()
    .split('')
    .reverse()
    .map((n, i) => parseInt(n.toString() + '0'.repeat(i)))
    .map((n) => {
      if (symbols[numbers.indexOf(n)]) {
        return symbols[numbers.indexOf(n)];
      } else {
        const remainder = numbers.filter((r) => r < n);
        let res = [];
        // console.log(res);
        while (n > 0) {
          return remainder.map((r) => {
            // console.log(
            //   n,
            //   r,
            //   n / r,
            //   n % r,
            //   symbols[numbers.indexOf(r)].repeat(n / r)
            // );
            if (n % r == 0 && n / r <= 3) {
              // console.log(symbols[numbers.indexOf(r)].repeat(n / r));
              res.push(symbols[numbers.indexOf(r)].repeat(n / r));
              n -= r * (n / r);
            } else {
              res.push(symbols[numbers.indexOf(r)]);
            }
          });
        }
        // console.log(res);
        // console.log(res.length);
        // return res.join('');
      }
    })
    .reverse()
    .join('');
};

// const solution = (val) => {
//   const result = [];
//   let i = 0;
//   nums.map((num) => {
//     while (
//       val > 0 &&
//       // val >= num - 100 &&
//       result[i - 2] != symbols[nums.indexOf(num)]
//     ) {
//       console.log(val);
//       val -= num;
//       result.push(symbols[nums.indexOf(num)]);
//       console.log(num);
//       i += 1;
//       // if (val - (num - 100) >= 0) {
//       //   // console.log(val, symbols[nums.indexOf(100)]);
//       //   val -= 900;
//       //   result.push(symbols[nums.indexOf(100)] + symbols[nums.indexOf(num)]);
//       //   i += 1;
//       // } else if (val - (num - 10) >= 0) {
//       //   // console.log(val, symbols[nums.indexOf(10)]);
//       //   val -= 90;
//       //   result.push(symbols[nums.indexOf(10)] + symbols[nums.indexOf(num)]);
//       //   i += 1;
//       // } else if (val - (num - 1) == 0) {
//       //   // console.log(val, symbols[nums.indexOf(1)]);
//       //   val - 4 == 0 ? (val -= 4) : (val -= 9);
//       //   result.push(symbols[nums.indexOf(1)] + symbols[nums.indexOf(num)]);
//       //   i += 1;
//       // }
//     }
//   });
//   return result;
// };

console.log(solution(1345));
// solution(1345);
// console.log(43 % 10);
