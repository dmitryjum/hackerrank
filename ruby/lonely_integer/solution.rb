#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'lonelyinteger' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def lonelyinteger(a)
    {}.tap do |counts|
        a.each {|n| counts[n].nil? ? counts[n] = 1 : counts[n] += 1 }
    end.select {|k,v| v == 1}.keys.first
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

a = gets.rstrip.split.map(&:to_i)

result = lonelyinteger a

fptr.write result
fptr.write "\n"

fptr.close()
