class AddTwittersToBoards < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :uid, :string
    add_column :boards, :nickname, :string
  end
end
