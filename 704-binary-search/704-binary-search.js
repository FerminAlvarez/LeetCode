/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length);
};

var binarySearch = function(nums, target, first, last){
    if(first > last) //BAse case
        return -1;
        
    let mid = Math.floor((first+last) / 2);
    
    if(nums[mid] == target) return mid;
    if(nums[mid] > target) return binarySearch(nums, target, first, mid - 1);
    if(nums[mid] < target) return binarySearch(nums, target, mid + 1, last);
    return -1;
}