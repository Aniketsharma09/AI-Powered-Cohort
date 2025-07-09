function moveZero(nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (i != j && nums[j] != 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
    j++;
  }
  return nums;
}
let nums = [0,1,0,3,12];
let ans = moveZero(nums);
console.log(ans);

