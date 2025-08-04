require 'pry'

COMMANDS = {
  "1" => :append,
  "2" => :delete,
  "3" => :print,
  "4" => :undo
}

class TextEditor
  attr_reader :result_text, :versions
  def initialize
    @result_text = ""
    @versions = []
  end

  def append(arg)
    @result_text << arg
    @versions << @result_text.clone
  end

  def delete(arg)
    @result_text.slice!(-arg.to_i, arg.to_i)
    @versions << @result_text.clone
  end

  def print(arg)
    puts @result_text[arg.to_i - 1]
  end

  def undo(arg)
    @versions.pop
    @result_text = @versions.last
  end
end

def solution(ops)
  lines = ops.split("\n")
  lines.shift
  editor = TextEditor.new
  lines.each do |l|
    com, arg = l.split(" ")
    editor.send(COMMANDS[com], arg)
  end
end


operations = "8
1 abc
3 3 
2 3
1 xy
3 2
4
4
3 1"

solution(operations)