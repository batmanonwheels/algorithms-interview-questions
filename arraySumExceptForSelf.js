// [1, 2, 3, 4] => [9, 8, 7, 6]

const arr = [1, 2, 3, 4];

const reduceArrExceptForSelf = (arr) => {
  return (result = arr.map((ele) => {
    const sum = arr.reduce((total, num) => {
      return total + num;
    });
    const difference = sum - arr[arr.indexOf(ele)];
    return difference;
  }));
};

console.log(reduceArrExceptForSelf(arr));
