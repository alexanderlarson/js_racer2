class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.integer :player_id
      t.integer :game_id
      t.timestamps
    end
  end
end
