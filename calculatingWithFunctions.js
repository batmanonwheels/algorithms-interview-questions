// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//OPERATORS
const plus = (num) => {
  return `${num}` + ' ' + 'plus';
};
const minus = (num) => {
  return `${num}` + ' ' + 'minus';
};
const times = (num) => {
  return `${num}` + ' ' + 'times';
};
const dividedBy = (num) => {
  return `${num}` + ' ' + 'divide';
};

//INTEGERS
const operators = { plus: '+', minus: '-', times: '*', divide: '/' };
const result = (prevNum, operator, currentNum) => {
  switch (operator) {
    case 'plus':
      return currentNum + parseInt(prevNum);
    case 'minus':
      return currentNum - parseInt(prevNum);
    case 'times':
      return currentNum * parseInt(prevNum);
    case 'divide':
      return parseInt(currentNum / prevNum);
  }
};
const zero = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 0)
    : 0;
};
const one = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 1)
    : 1;
};
const two = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 2)
    : 2;
};
const three = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 3)
    : 3;
};
const four = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 4)
    : 4;
};
const five = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 5)
    : 5;
};
const six = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 6)
    : 6;
};
const seven = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 7)
    : 7;
};
const eight = (prev) => {
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 8)
    : 8;
};
const nine = (prev, fn) => {
  console.log(prev, fn);
  return prev !== undefined
    ? result(prev.split(' ')[0], prev.split(' ')[1], 9)
    : 9;
};

function ten(fn) {
  return fn ? console.log(fn(10)) : 0;
}
console.log(ten(minus(one())));

console.log(nine(minus(nine())));
// console.log(four(plus(nine())));
// console.log(eight(plus(three())));
// console.log(nine(plus(eight())));

// //OPERATORS
// const plus = (num) => {
//   return `${num}` + ' ' + 'plus';
// };
// const minus = (num) => {
//   return `${num}` + ' ' + 'minus';
// };
// const times = (num) => {
//   return `${num}` + ' ' + 'times';
// };
// const dividedBy = (num) => {
//   return `${num}` + ' ' + 'divide';
// };

// //INTEGERS
// const operators = { plus: '+', minus: '-', times: '*', divide: '/' };
// const zero = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 0 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 0 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 0 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(0 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 0;
//   }
// };
// const one = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 1 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 1 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 1 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(1 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 1;
//   }
// };
// const two = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 2 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 2 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 2 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(2 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 2;
//   }
// };
// const three = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 3 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 3 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 3 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(3 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 3;
//   }
// };
// const four = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 4 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 4 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 4 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(4 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 4;
//   }
// };
// const five = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 5 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 5 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 5 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(5 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 5;
//   }
// };
// const six = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 6 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 6 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 6 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(6 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 6;
//   }
// };
// const seven = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 7 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 7 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 7 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(7 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 7;
//   }
// };
// const eight = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 8 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 8 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 8 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(8 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 8;
//   }
// };
// const nine = (prev) => {
//   if (prev !== undefined) {
//     switch (prev.split(' ')[1]) {
//       case 'plus':
//         return 9 + parseInt(prev.split(' ')[0]);
//       case 'minus':
//         return 9 - parseInt(prev.split(' ')[0]);
//       case 'times':
//         return 9 * parseInt(prev.split(' ')[0]);
//       case 'divide':
//         return parseInt(9 / parseInt(prev.split(' ')[0]));
//     }
//   } else {
//     return 9;
//   }
// };
