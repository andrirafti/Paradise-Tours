class CreateRatingEntertainments < ActiveRecord::Migration[6.1]
  def change
    create_table :rating_entertainments do |t|
      t.integer :rating
      t.string :name
      t.string :review
      t.references :entertainment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
