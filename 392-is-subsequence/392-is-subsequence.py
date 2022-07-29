class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        j = 0
        founded = len(s) == i
        
        while (i<len(s) and j<len(t) and not founded):
            if(s[i] == t[j]):
                i += 1
                founded = len(s) == i
                
            j += 1
            
        return founded