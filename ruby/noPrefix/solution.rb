#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'noPrefix' function below.
#
# The function accepts STRING_ARRAY words as parameter.
#

def noPrefix(words)
    bad_set = nil
    words.each do |w|
        words.each do |s|
            unless w == s
                prefix = Regexp.new("^#{w}")
                if (s =~ prefix) == 0
                    bad_set = s
                    break
                end
            end
        end
    end
    puts bad_set.nil? ? "GOOD SET" : "BAD SET\n#{bad_set}"
end

n = gets.strip.to_i

words = Array.new(n)

n.times do |i|
    words_item = gets.chomp

    words[i] = words_item
end

noPrefix words
