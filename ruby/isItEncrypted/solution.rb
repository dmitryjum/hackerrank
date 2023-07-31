require 'pry'
def validator(original, encrypted)
  test_map = {}
  return false if original.length != encrypted.length
  original.chars.each_with_index do |char, i|
    if !test_map[char].nil?
      if test_map[char] != encrypted[i]
        return false
      end
    else
      test_map[char] = encrypted[i]
    end
  end
  true
end