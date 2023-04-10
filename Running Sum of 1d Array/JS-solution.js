/**
 * @param {number[]} nums
 * @return {number[]}
 */

  /* 
  APPROACH TO ACHIEVE
    1.looping the input array
    2.using a variable to sum value of each element in loop with its pervious sum
    3.pushing the summed up value to new array and returning the array at the end
  */

  /* 
  NOTE:
    not working on the parameter as there is a chance of
    modifying actual input argument array value which might be needed
    for further operations
  */

var runningSum = function(nums) {

    let accumulator = 0;
    let sumArr = [];
    let len = nums.length;

    for(let i=0; i < len; i++) {
        accumulator += nums[i];
        sumArr.push(accumulator);
    }
    return sumArr;
};

let arr= [1,2,3,4];
console.log(runningSum(arr));