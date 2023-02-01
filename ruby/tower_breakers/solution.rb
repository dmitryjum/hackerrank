#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'towerBreakers' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER m
#

def towerBreakers(n, m)
    return 2 if (m == 1) # if the tower heights are 1, the first player can't make a move because he needs to leave one item
    2 - n % 2 # if there's even number of towers, player 2 will always finish last, so player one can't make another move and looses
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

t = gets.strip.to_i

t.times do |t_itr|
    first_multiple_input = gets.rstrip.split

    n = first_multiple_input[0].to_i

    m = first_multiple_input[1].to_i

    result = towerBreakers n, m

    fptr.write result
    fptr.write "\n"
end

fptr.close()
