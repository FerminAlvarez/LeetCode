/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.push(...nums.splice(0, nums.length - k % nums.length));
    return nums;
};