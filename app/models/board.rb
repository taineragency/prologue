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
class Board < ApplicationRecord
	has_secure_password

  	validates :name,
	    presence: true,
	    uniqueness: true,
	    length: {maximum: 16}

	    #format: {
	    	#with:/\A[a-z0-9]+\z/,
	    	#message: 'は小文字英数字で入力してください'
    	#}
	validates :password,
		length: {minimum: 6}


	has_many :comments, dependent: :delete_all
	#has_many :board_tag_relations
	#has_many :tags, through: :board_tag_relations

	#validates :email, presence: true, length: {maximum: 50}
	#validates :profile, presence: true, length: {maximum: 140}
end
