require 'pry'

def bomberMan(n, grid)
  (1..n).each do |i|
    bombs_coordinates = []
    grid.each do |row|
      binding.pry
      location = row.index("0")
    end
  end
end
grid =['.......',
       '...O...',
       '....O..',
       '.......',
       'OO.....',
       'OO.....']

puts bomberMan(3, grid)