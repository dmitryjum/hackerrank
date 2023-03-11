#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'cookies' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY A
#

import heapq


def cookies(k, A):
    operations = 0
    heapq.heapify(A)
    while A[0] < k and len(A) > 1:
        a = heapq.heappop(A)
        b = heapq.heappop(A)
        c = a + 2 * b
        heapq.heappush(A, c)
        operations += 1
    return operations if A[0] >= k else -1


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    A = list(map(int, input().rstrip().split()))

    result = cookies(k, A)

    fptr.write(str(result) + '\n')

    fptr.close()
