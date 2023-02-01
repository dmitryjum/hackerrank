#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'caesarCipher' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#

def caesarCipher(s, k)
    abc_array = "abcdefghijklmnopqrstuvwxyz".chars
    abc_copy = abc_array.dup
    shift_count = k - k/abc_array.size * abc_array.size
    abc_rotated = abc_copy.push(*abc_copy.shift(shift_count))
    s.chars.map do |c|
        char_index = abc_array.index(c.downcase)
        char_index.nil? ? c : c == c.capitalize ? abc_rotated[char_index].capitalize : abc_rotated[char_index]
    end.join
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

s = gets.chomp

k = gets.strip.to_i

result = caesarCipher s, k

fptr.write result
fptr.write "\n"

fptr.close()
