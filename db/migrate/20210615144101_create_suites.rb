class CreateSuites < ActiveRecord::Migration[6.1]
  def change
    create_table :suites do |t|
      t.integer :price
      t.string :name
      t.string :description
      t.string :imgurl
      t.references :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
