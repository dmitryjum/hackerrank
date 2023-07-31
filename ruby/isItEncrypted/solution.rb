require 'pry'
def validator(original, encrypted)
  test_map = {}
  return false if original.length != encrypted.length || (original.empty? && encrypted.empty?)
  original.chars.each_with_index do |char, i|
    if test_map[char].nil?
      return false if test_map.values.include? encrypted[i]
      test_map[char] = encrypted[i]
    else
      return false if test_map[char] != encrypted[i]
    end
  end
  true
end