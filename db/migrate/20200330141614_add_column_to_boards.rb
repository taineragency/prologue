class AddColumnToBoards < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :password_digest, :string, null: false
  end
end
