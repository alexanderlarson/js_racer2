class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winning_player
      t.string :time
      t.timestamps
    end
  end
end
