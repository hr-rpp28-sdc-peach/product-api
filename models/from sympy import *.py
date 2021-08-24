from sympy import *
M=5*10**15
n=1
ans=0
while True:
    if n**2+(n+1)**2>M:
        break
    if isprime(n**2+(n+1)**2):
        ans+=1
print(ans)
