# == Schema Information
#
# Table name: boards
#
#  id              :integer          not null, primary key
#  description     :string(255)
#  email           :string(255)
#  image_url       :string(255)
#  img             :string(255)
#  name            :string(255)
#  nickname        :string(255)
#  password_digest :string(255)
#  profile         :text(65535)
#  provider        :string(255)
#  uid             :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Board < ApplicationRecord
	has_secure_password

  	validates :name,
	    presence: true,
	    uniqueness: true,
	    length: {maximum: 10}

	    #format: {
	    	#with:/\A[a-z0-9]+\z/,
	    	#message: 'は小文字英数字で入力してください'
    	#}
	#validates :password,
		#length: {minimum: 6}


	has_many :comments, dependent: :delete_all
	#has_many :board_tag_relations
	#has_many :tags, through: :board_tag_relations

	validates :email, length: {maximum: 50}
	validates :profile, length: {maximum: 1000}

	def self.find_or_create_from_auth(auth)
	    provider = auth[:provider]
	    uid = auth[:uid]
	    nickname = auth[:info][:nickname]
	    name = auth[:info][:name]
	    image_url = auth[:info][:image]
	    description = auth[:info][:description]
	    
	    self.find_or_create_by(provider: provider, uid: uid) do |board|
			board.nickname = nickname
			board.name = name
			board.image_url = image_url
			board.description = description
	    end
	  end

end
