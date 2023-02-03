#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'gridChallenge' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING_ARRAY grid as parameter.
#

def gridChallenge(grid)
    results = []
    grid.first.size.times do |i|
        column = grid.map do |row|
        row.chars.sort[i]
        end
        results << (column == column.sort)
    end
    results.include?(false) ? "NO" : "YES"
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

t = gets.strip.to_i

t.times do |t_itr|
    n = gets.strip.to_i

    grid = Array.new(n)

    n.times do |i|
        grid_item = gets.chomp

        grid[i] = grid_item
    end

    result = gridChallenge grid

    fptr.write result
    fptr.write "\n"
end

fptr.close()
