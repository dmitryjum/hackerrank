require 'pry'
def validator(original, encrypted)
  return false if original.length != encrypted.length || (original.empty? && encrypted.empty?)
  test_map = {}
  original.chars.zip(encrypted.chars).each do |char, enc_char|
    if test_map[char].nil?
      return false if test_map.values.include? enc_char
      test_map[char] = enc_char
    else
      return false if test_map[char] != enc_char
    end
  end
  true
end