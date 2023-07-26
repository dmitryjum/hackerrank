Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

Example

arr = [5, 6, 8, 11]

8 is between two subarrays that sum to 11.

arr = [1]

The answer is [1]  since left and right sum to 0.

You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

Function Description

Complete the balancedSums function in the editor below.

balancedSums has the following parameter(s):

int arr[n]: an array of integers
Returns

string: either YES or NO

Sample Input

2
3
1 2 3
4
1 2 3 3
Sample Output

NO
YES
Explanation

For the first test case, no such index exists.
For the second test case, A[0] + A[1] = A[3], therefore index 2 satisfies the given conditions.