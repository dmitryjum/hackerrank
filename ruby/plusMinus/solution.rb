#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr)
    # Write your code here
    total = arr.length
    ratios_hash = {
        counter: {
            positive: 0,
            negative: 0,
            zero: 0
        },
        ratios: {
            positive: 0,
            negative: 0,
            zero: 0
        }
    }
    
    calculate = -> (key) do
        ratios_hash[:counter][key] += 1
        ratios_hash[:ratios][key] = "%0.6f" % (ratios_hash[:counter][key] / total.to_f)
    end
    
    arr.each do |n|
        if n.positive?
            calculate.call(:positive)
        elsif n.negative?
            calculate.call(:negative)
        else
            calculate.call(:zero)
        end 
    end
    
    [:positive, :negative, :zero].each {|k| puts ratios_hash[:ratios][k]}
end

n = gets.strip.to_i

arr = gets.rstrip.split.map(&:to_i)

plusMinus arr