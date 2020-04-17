class AddColumnsToBoards < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :provider, :string
    add_column :boards, :image_url, :string
    add_column :boards, :description, :string
  end
end
