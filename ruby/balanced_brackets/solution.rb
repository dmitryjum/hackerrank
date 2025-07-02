require 'pry'

def isBalanced(s)
    brackets_map = {
        "{" => "}",
        "[" => "]",
        "(" => ")"
    }
    stack = []
    s.each_char do |c|
        if brackets_map[stack.last] == c
            stack.pop
        else
            stack << c
        end
    end
    stack.empty? ? "YES" : "NO"
end

isBalanced("{[()]}")
isBalanced("{[(])")
isBalanced("{{[[(())]]}}")