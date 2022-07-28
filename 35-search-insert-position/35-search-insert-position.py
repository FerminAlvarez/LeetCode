class Solution:
    def searchInsert(self, nums, target):
        return self.search(nums, target)
    
    
    def search(self, nums, target):
        return self.binarySearch(nums, 0, len(nums) - 1, target)
    
    
    def binarySearch(self, nums, first, last, target):
        
        if(first > last):
            return first
            
        mid = (first + last) // 2;
            
        if(target < nums[mid]): return self.binarySearch(nums, first, mid - 1, target)
            
        if(target > nums[mid]): return self.binarySearch(nums, mid + 1, last, target)
        
        return mid