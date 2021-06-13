# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_10_165951) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countrys", force: :cascade do |t|
    t.string "name"
    t.integer "distance"
    t.string "embarkation"
    t.string "airline"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "excursions", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "description"
    t.string "imgurl"
    t.bigint "hotel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hotel_id"], name: "index_excursions_on_hotel_id"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name"
    t.string "imgurl"
    t.integer "price"
    t.bigint "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_hotels_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.integer "distance"
    t.string "imgurl"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "reviewrating"
    t.string "name"
    t.string "review"
    t.bigint "hotel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hotel_id"], name: "index_ratings_on_hotel_id"
  end

  add_foreign_key "excursions", "hotels"
  add_foreign_key "hotels", "locations"
  add_foreign_key "ratings", "hotels"
end
