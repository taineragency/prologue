# == Schema Information
#
# Table name: boards
#
#  id              :integer          not null, primary key
#  email           :string(255)
#  img             :string(255)
#  name            :string(255)
#  password_digest :string(255)
#  profile         :text(65535)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
