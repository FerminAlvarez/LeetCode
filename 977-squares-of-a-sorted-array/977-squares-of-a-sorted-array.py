class Solution:
    def sortedSquares(self, nums):
        result = []
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            rightSquare = nums[right] **2
            leftSquare = nums[left] **2
            if leftSquare > rightSquare:
                result.append(leftSquare)
                left += 1
            else:
                result.append(rightSquare)
                right -= 1
                
        return result[::-1]