require 'pry'
def minimumBribes(q)
  chaos = false
  bribes = 0
  q.each_with_index do |num, i|
    if (num - (i+1)) > 2
      chaos = true
      puts "Too chaotic"
      break
    else
      i.times { |j| bribes += 1 if q[j] > num }
    end
  end
  puts bribes unless chaos
end

a = [1,2,3,5,4,6,7,8]
b = [4,1,2,3]
c = [1,2,5,3,4,7,8,6]
d = [1,2,5,3,7,8,6,4]
minimumBribes(a)
minimumBribes(b)
minimumBribes(c)
minimumBribes(d)