/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sortedNums = nums.sort();
    
    for(let i= 0; i < sortedNums.length - 1; i++){
        if(sortedNums[i] === sortedNums[i+1]) return true;
    }
    return false;
};