require 'pry'
require './solution.rb'

RSpec.describe "gridChallenge" do
  it "returns YES if columns sorted alphabetically" do
    grid = ['abc', 'lmp', 'qrt']
    expect(gridChallenge(grid)).to eq("YES")
  end

  it "returns NO if columns aren't sorted alphabetically" do
    grid = [
            'mpxz',
            'abcd',
            'wlmf'
          ]
    expect(gridChallenge(grid)).to eq("NO")
  end

  it "returns YES if columns sorted alphabetically" do
    grid = ['abc', 'hjk', 'mpq', 'rtv']
    expect(gridChallenge(grid)).to eq("YES")
  end
end