require 'pry'
# def superDigit(n, k)
#     if n.to_i <= 9
#       puts n
#       return n
#     end
#     result = (n.chars * k).reduce(0) { |sum, n| sum + n.to_i }
#     superDigit(result.to_s, 1)
# end

def superDigit(n, k)
  number = n * k
  while number.size > 1
    number = number.chars.reduce(0) {|sum, n| sum + n.to_i}.to_s
  end
  puts number
end

superDigit('148', 100000)