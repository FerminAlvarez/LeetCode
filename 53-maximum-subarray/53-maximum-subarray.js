/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let numAux = 0;
    let largestSum = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++){
        if(numAux + nums[i] > nums[i] )
            numAux = numAux + nums[i];
        else
            numAux = nums[i];
            
        if(numAux > largestSum)
            largestSum = numAux;
            
    }
    
    return largestSum;
};