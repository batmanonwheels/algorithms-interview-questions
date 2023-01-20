/*
  1658. Minimum Operations to Reduce X to Zero

  You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

  Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.


  nums = [1,1,4,2,3], x = 5 => 2 (The optimal solution is to remove the last two elements to reduce x to zero.)
  nums = [3,2,20,1,1,3], x = 10 => 5 (The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.)
*/

//iterate over the nums array and find the smallest set of integers that equal x

const minOperations = (nums, x) => {
	if (nums.reduce((prev, current) => current + prev) >= x) {
		let resArr = []; //the number of operations to reduce x to zero
		// let res = 0;
		nums.map((num) => {
			let res = 0;
			for (let i = nums.indexOf(num) + 1; i <= x; i++) {
				console.log(i);
				if (i > x) {
					//add elements from the array until i equals 0
					num += nums[i];
					res++;
				} else if (i == x) {
					//push the number of operations to res[]
					resArr.push(res);
				}
			}
			// index++;
		});
		return Math.min(...resArr); //return the smallest value from res[]
	} else {
		//otherwise, return -1
		return -1;
	}
};

console.log(minOperations([1, 1, 4, 2, 3], 5), 2);
// console.log(minOperations([3, 2, 20, 1, 1, 3], 10), 5);
// console.log(minOperations([1, 3], 5), -1);
