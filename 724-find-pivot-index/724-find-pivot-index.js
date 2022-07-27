/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = [nums[0]];
    for(let i = 1; i<nums.length; i++){
        left.push(nums[i] + left[i-1]);
    }
    
    let right = Array(nums.length);
    right[nums.length-1] = nums[nums.length-1]
    
    for(let i = nums.length-2; i>=0; i--){
        right[i] = (nums[i] + right[i+1]);
    }
    
    for(let i = 0; i < right.length; i++){
        if(right[i] === left[i]) return i;
    }
    
    return -1;
};