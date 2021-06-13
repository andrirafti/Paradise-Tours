# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@Dominican= Location.create(name: "Dominican Rebpulic",distance: 1538, imgurl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F09%2F02%2Fdominican-republic-beach-TOURISTINS0920.jpg", price: 500)

@Breathless= Hotel.create(name: "Breathless Resorts" , imgurl: "http://www.breathlessresorts.com/content/dam/amr/photography/breathless/brepc/BREPC_FreestylePool_2.jpg", price: 230, location: @Dominican)
@BreathlessRating=Rating.create(rating: 5, name: "Billy", review: " A great 5 star resort to party at!",hotel: @Breathless )
@BreathlessExcursion= Excursion.create(name: "Swimming With Sharks" , imgurl: "https://miro.medium.com/max/10834/1*rcHtosJCDr8Njqaj1GUb9w.jpeg", price: 250, description: "Ever wanted to swim with the oceans terrfying predators? Now with the help of our professionals you can!", hotel: @Breathless )
@BreathlessExcursion= Excursion.create(name: "PaintBall" , imgurl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Woodsball_marksman_06.JPG", price: 150, description: "Come enjoy a thrilling paintball game in our jungles! ", hotel: @Breathless )

@Excellence= Hotel.create(name: "Excellence Resorts" , imgurl: "https://images.trvl-media.com/hotels/1000000/990000/982800/982733/220884a9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium", price: 200, location: @Dominican)
@ExcellenceRating=Rating.create(rating: 4, name: "John", review: "A great 5 star resort to relax at",hotel: @Excellence)
@ExcellenceExcursion= Excursion.create(name: "SkyDiving" , imgurl: "https://www.skydivecarolina.com/wp-content/uploads/DSCF5395.jpg", price: 450, description: "Want the thrill of a life-time? Want to face your fear of heights? Come sky-dive with us today!", hotel: @Excellence )
@ExcellenceExcursion= Excursion.create(name: "Horse Riding On Beach" , imgurl: "https://s3-media0.fl.yelpcdn.com/bphoto/smPKAgrnY3Tdrdek4yMRoQ/o.jpg", price: 170, description: "Spend the day with us at the beach with friends, horses,and drinks on the house!", hotel: @Excellence )

@Sanctuary= Hotel.create(name: "Sanctuary Resorts" , imgurl: "https://www.tripsavvy.com/thmb/CZCY8RZqHfdaD8YzE96TQqSALI4=/1400x930/filters:fill(auto,1)/sanctuarycapcana-578d08e85f9b584d20f1219d.jpg", price: 350, location: @Dominican)
@SanctuaryExcursion= Excursion.create(name: "Horse Riding On Beach" , imgurl: "https://s3-media0.fl.yelpcdn.com/bphoto/smPKAgrnY3Tdrdek4yMRoQ/o.jpg", price: 150, description: "Spend the day with us at the beach with friends, horses,and drinks on the house!", hotel: @Sanctuary )
@SanctuaryExcursion= Excursion.create(name: "SkyDiving" , imgurl: "https://www.skydivecarolina.com/wp-content/uploads/DSCF5395.jpg", price: 350, description: "Want the thrill of a life-time? Want to face your fear of heights? Come sky-dive with us today!", hotel: @Sanctuary )
@SanctuaryRating=Rating.create(rating: 4, name: "Andri", review: "A great 5 star resort to relax at",hotel: @Sanctuary)


@Albania= Location.create(name: "Albania",distance: 4646, imgurl: "https://www.opensignal.com/sites/opensignal-com/files/styles/market_insight_featured_large/public/data/images/national/data-2021-04-albania/albania.png?itok=A51dtDRN", price: 1500)

@Sandy= Hotel.create(name: "Sandy Beach Resort" , imgurl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269795487.jpg?k=1e5a3ff89444b98cc9b7ec96a241e62caebc792bfeafa715dced741ab8bfa5bc&o=&hp=1", price: 130, location: @Albania)
@SandyExcursion= Excursion.create(name: "Spear Fishing" , imgurl: "https://spearfishingbaja.mx/wp-content/uploads/2017/10/spearfishing-baja-california-mexico.jpg", price: 170, description: "Ever wanted to hunt in the ocean? Come join our professionals today in a 4 hour spear-fishing event! (Drinks+Food Included)", hotel: @Sandy )
@SandyExcursion= Excursion.create(name: "Swimming With Sharks" , imgurl: "https://miro.medium.com/max/10834/1*rcHtosJCDr8Njqaj1GUb9w.jpeg", price: 150, description: "Ever wanted to swim with the oceans terrfying predators? Now with the help of our professionals you can!", hotel: @Sandy )
@SandyRating=Rating.create(rating: 4, name: "Rocky", review: "A great 5 star resort to Party at",hotel: @Sandy)
 

puts "Created The Files!"