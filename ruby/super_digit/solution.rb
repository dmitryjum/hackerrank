#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'superDigit' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING n
#  2. INTEGER k
#

def superDigit(n, k)
    n if n.to_i <= 9
    result = n.chars.reduce(0) { |sum, n| sum + n.to_i } * k
    result <= 9 ? result : superDigit(result.to_s, 1)
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

first_multiple_input = gets.rstrip.split

n = first_multiple_input[0]

k = first_multiple_input[1].to_i

result = superDigit n, k

fptr.write result
fptr.write "\n"

fptr.close()
