nums = [1,2,3,1]
k=3

while abs(i-j)<=k and j <len(nums)-1:

windows = [data[i : i + size] for i in range(len(data) - size + 1)]
print(windows)
