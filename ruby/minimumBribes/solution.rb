#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'minimumBribes' function below.
#
# The function accepts INTEGER_ARRAY q as parameter.
#

def minimumBribes(q)
  chaos = false
  bribes = 0
  q.each_with_index do |num, i|
    if (num - (i+1)) > 2
      chaos = true
      puts "Too chaotic"
      break
    else
      ([0,num-2].max..i).each {|j| bribes += 1 if q[j] > num}
    end
  end
  puts bribes unless chaos
end

t = gets.strip.to_i

t.times do |t_itr|
    n = gets.strip.to_i

    q = gets.rstrip.split.map(&:to_i)

    minimumBribes q
end
