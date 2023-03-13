#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'noPrefix' function below.
#
# The function accepts STRING_ARRAY words as parameter.
#

def noPrefix(words)
    bad_set = false
    words.each do |w|
        words.each do |s|
            unless w == s
                prefix = Regexp.new("^#{w}")
                bad_set = (s =~ prefix) == 0
            end
        end
    end
    puts bad_set ? "BAD SET" : "GOOD SET"
end

n = gets.strip.to_i

words = Array.new(n)

n.times do |i|
    words_item = gets.chomp

    words[i] = words_item
end

noPrefix words
