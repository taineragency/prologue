class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :email
      t.text :profile
      t.string :img
      t.string :password_digest, null: false

      t.timestamps
    end
    add_index :boards, :name, uniqie: true
  end
end
