#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s)
    time_array = s.split(/\D/)
    hour = time_array[0].to_i
    day_phase = s.match(/[A-Z]+/)[0]
    if (day_phase == "PM" && hour < 12)
        time_array[0] = hour + 12
    elsif (day_phase == "AM" && hour == 12)
        time_array[0] = "00"
    end
    time_array.join(":")
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

s = gets.chomp

result = timeConversion s

fptr.write result
fptr.write "\n"

fptr.close()