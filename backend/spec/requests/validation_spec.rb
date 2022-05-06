require 'rails_helper'

RSpec.describe "API V1 Validation", type: :request do
  describe "POST /api/v1/validate_expresion" do

    context "with a valid string the result is OK" do
      it "pass with a b" do
        expect("b").to match(/^a*(b|ca*)$/)
      end
      it "pass with a c" do
        expect("c").to match(/^a*(b|ca*)$/)
      end
      it "pass with a ac" do
        expect("ac").to match(/^a*(b|ca*)$/)
      end
      it "pass with a ab" do
        expect("ac").to match(/^a*(b|ca*)$/)
      end
    end

    context "with a invalid string the result isn't OK" do
      it "doesn't pass with only a" do
        expect("a").not_to match(/^a*(b|ca*)$/)
      end
      it "doesn't pass with only ba" do
        expect("ba").not_to match(/^a*(b|ca*)$/)
      end
      it "doesn't pass with abc" do
        expect("abc").not_to match(/^a*(b|ca*)$/)
      end
      it "doesn't pass with abca" do
        expect("abca").not_to match(/^a*(b|ca*)$/)
      end
    end

  end
end
