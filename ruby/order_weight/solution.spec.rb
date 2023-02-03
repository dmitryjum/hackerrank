require 'pry'
require './solution.rb'

RSpec.describe "sample tests" do
  it "should handle the example" do
    expect(order_weight("56 65 74 100 99 68 86 180 90")).to eq("100 180 90 56 65 74 68 86 99")
  end

  it "should handle the second example" do
    expect(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123")).to eq("11 11 2000 10003 22 123 1234000 44444444 9999")
  end
end
