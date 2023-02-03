require 'pry'

def order_weight(strng)
  weights = []
  weights = strng.split(" ").map do |num|
    [num, num.chars.reduce(0) {|sum, n| sum + n.to_i}]
  end
  weights_sorted = weights.sort_by {|num, weight| [weight, num] }
  weights_sorted.map(&:first).join(" ")
end