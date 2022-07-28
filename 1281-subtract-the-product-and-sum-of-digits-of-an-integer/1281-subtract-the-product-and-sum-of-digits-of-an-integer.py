class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        divisor = 1
        suma = 0
        
        while(n != 0):
            divisor *= (n % 10)
            suma += (n % 10)
            n //= 10
        
        return divisor - suma