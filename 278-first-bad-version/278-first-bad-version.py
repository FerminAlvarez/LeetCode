# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        return self.search(n)
    
    
    def search(self, nums):
        return self.binarySearch(0, nums)
    
    
    def binarySearch(self, first, last):
        mid = (first + last) // 2;
        
        if(not isBadVersion(mid) and isBadVersion(mid+1)): return mid+1
            
        if(isBadVersion(mid)): return self.binarySearch(first, mid - 1)
            
        if(not isBadVersion(mid)): return self.binarySearch(mid + 1, last)
        
        return -1