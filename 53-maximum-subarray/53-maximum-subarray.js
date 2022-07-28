/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let numAux = 0;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] + nums[i] > nums[i] )
            numAux = nums[i-1] + nums[i];
        else
            numAux = nums[i];
            
        nums[i] = numAux;
    }
    
    let largestSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > largestSum) largestSum = nums[i];
    }
    
    return largestSum;
};
