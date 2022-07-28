/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let arrayAux = [nums[0]];
    let numAux = 0;
    
    for(let i = 1; i < nums.length; i++){
        if(arrayAux[i-1] + nums[i] > nums[i] )
            numAux = arrayAux[i-1] + nums[i];
        else
            numAux = nums[i];
            
        arrayAux.push(numAux);
    }
    
    let largestSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i< arrayAux.length; i++){
        if(arrayAux[i] > largestSum) largestSum = arrayAux[i];
    }
    
    return largestSum;
};