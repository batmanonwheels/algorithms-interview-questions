const arr = [1, 2, 3, 4];

const reduceArrExceptForSelf = (arr) => {
  return (result = arr.map((ele) => {
    const product = arr.reduce((total, num) => {
      return total * num;
    });
    const quotient = product / arr[arr.indexOf(ele)];
    return quotient;
  }));
};

console.log(reduceArrExceptForSelf(arr));
