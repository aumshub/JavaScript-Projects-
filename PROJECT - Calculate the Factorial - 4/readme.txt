\\ FOR REDUCE METHOD:
Example
Let's say arr is [5, 4, 3, 2, 1].

Iteration Details
Initial Call:
If you don't provide an initial value:
element = 5 (first element of the array)
value = 4 (second element of the array)
Subsequent Calls:
1st Iteration: element = 5, value = 4 → Result = 5 * 4 = 20
2nd Iteration: element = 20, value = 3 → Result = 20 * 3 = 60
3rd Iteration: element = 60, value = 2 → Result = 60 * 2 = 120
4th Iteration: element = 120, value = 1 → Result = 120 * 1 = 120
Final Result
The final result returned by reduce() will be 120, which is the product of all elements in the array.