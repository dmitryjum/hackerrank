require 'pry'
require './solution.rb'

RSpec.describe "validator" do
  it "returns true if every letter has unique encoded representation" do
    expect(validator("apple", "abbcd")).to eq(true)
    expect(validator("pineapple", "abcdeaafd")).to eq(true)
  end

  context "returns false if 2 or more different letters matched with the same encryption letter" do
    it { expect(validator("apple", "aaaaa")).to eq(false) }
    it { expect(validator("apple", "abbab")).to eq(false) }
  end
  
  it "returns false if 2 or more same letters matched with different encryption letters" do
    expect(validator("apple", "abcde")).to eq(false)
    expect(validator("aaaaa", "apple")).to eq(false)
  end

  it "returns false if the length of strings doesn't match" do
    expect(validator("pineapple", "asdfsd")).to eq(false)
  end
end