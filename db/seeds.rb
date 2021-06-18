# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@Dominican= Location.create(name: "Dominican Rebpulic",distance: 1538, imgurl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F09%2F02%2Fdominican-republic-beach-TOURISTINS0920.jpg", price: 500)

@Breathless= Hotel.create(name: "Breathless Resorts" , imgurl: "http://www.breathlessresorts.com/content/dam/amr/photography/breathless/brepc/BREPC_FreestylePool_2.jpg", price: 230, location: @Dominican)
@BreathlessRating=Rating.create(reviewrating: 5, name: "Billy", review: " A great 5 star resort to party at!",hotel: @Breathless )
@BreathlessExcursion= Excursion.create(name: "Swimming With Sharks" , imgurl: "https://miro.medium.com/max/10834/1*rcHtosJCDr8Njqaj1GUb9w.jpeg", price: 250, description: "Ever wanted to swim with the oceans terrfying predators? Now with the help of our professionals you can!", hotel: @Breathless )
@BreathlessExcursion= Excursion.create(name: "PaintBall" , imgurl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Woodsball_marksman_06.JPG", price: 150, description: "Come enjoy a thrilling paintball game in our jungles! ", hotel: @Breathless )
@BreathlessSuite1= Suite.create(name: "Junior Suite" , imgurl: "https://www.royalcaribbeanblog.com/sites/default/files/fb/1452882948_AN-AccSpaJuniorCatSJ.jpg", price: 120, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Breathless )
@BreathlessSuite2= Suite.create(name: "Deluxe Suite" , imgurl: "https://cdn.sandals.com/sandals/v12/images/resorts/src/home/src-luxurious-suite.jpg", price: 190, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Breathless )
@BreathlessSuite3= Suite.create(name: "Swim Up Suite" , imgurl: "https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/swim-up-950x530.jpg", price: 150, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Breathless )
@BreathlessEntertainment= Entertainment.create(name: "Kayaking" , imgurl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e8/2b/71.jpg", price: 50, description: "Breathless Kayak entertainment offer you, your friends and your family an unforgettable experience. While enjoying the the tropical settings of the Dominican Republic be prepared to be amazed at all the the underwater marine life and beautiful crystal clear waters without getting wet. Kayaking will never be the same after you try these absolutely stunning transparent kayaks.", hotel: @Breathless )
@BreathlessRating=RatingEntertainment.create(rating: 2, name: "Bob", review: "I fell off and nobody helped me.. ",entertainment: @BreathlessEntertainment)
@BreathlessSuiteRating=RatingSuite.create(rating: 5, name: "Bob", review: "Gorgeous Room stayed here for 5 nights very clean ",suite: @BreathlessSuite1)
@BreathlessSuiteRating=RatingSuite.create(rating: 5, name: "Billy", review: "Gorgeous Room stayed here for 9 nights very professional staff ",suite: @BreathlessSuite2)
@BreathlessSuiteRating=RatingSuite.create(rating: 5, name: "Johnny", review: "Gorgeous Room no complaints hand down. ",suite: @BreathlessSuite3)




@Excellence= Hotel.create(name: "Excellence Resorts" , imgurl: "https://images.trvl-media.com/hotels/1000000/990000/982800/982733/220884a9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium", price: 200, location: @Dominican)
@ExcellenceRating=Rating.create(reviewrating: 4, name: "John", review: "A great 5 star resort to relax at",hotel: @Excellence)
@ExcellenceExcursion= Excursion.create(name: "SkyDiving" , imgurl: "https://www.skydivecarolina.com/wp-content/uploads/DSCF5395.jpg", price: 450, description: "Want the thrill of a life-time? Want to face your fear of heights? Come sky-dive with us today!", hotel: @Excellence )
@ExcellenceExcursion= Excursion.create(name: "Horse Riding On Beach" , imgurl: "https://s3-media0.fl.yelpcdn.com/bphoto/smPKAgrnY3Tdrdek4yMRoQ/o.jpg", price: 170, description: "Spend the day with us at the beach with friends, horses,and drinks on the house!", hotel: @Excellence )
@ExcellenceSuite1= Suite.create(name: "Junior Suite" , imgurl: "https://www.royalcaribbeanblog.com/sites/default/files/fb/1452882948_AN-AccSpaJuniorCatSJ.jpg", price: 120, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Excellence )
@ExcellenceSuite2= Suite.create(name: "Deluxe Suite" , imgurl: "https://cdn.sandals.com/sandals/v12/images/resorts/src/home/src-luxurious-suite.jpg", price: 190, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Excellence )
@ExcellenceSuite3= Suite.create(name: "Swim Up Suite" , imgurl: "https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/swim-up-950x530.jpg", price: 150, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Excellence )
@ExcellenceEntertainment= Entertainment.create(name: "Kayaking" , imgurl: "http://puntacanadominicanrepublic.com/wp-content/uploads/punta-cana-kayaking-dominican-republic-3.jpg", price: 70, description: "Excellence Kayak entertainment offer you, your friends and your family an unforgettable experience. While enjoying the the tropical settings of the Dominican Republic be prepared to be amazed at all the the underwater marine life and beautiful crystal clear waters without getting wet. Kayaking will never be the same after you try these absolutely stunning transparent kayaks.", hotel: @Excellence )
@ExcellenceRating=RatingEntertainment.create(rating: 5, name: "Billy", review: "A great time overall ",entertainment: @ExcellenceEntertainment)
@ExcellenceSuiteRating=RatingSuite.create(rating: 5, name: "Bob", review: "Gorgeous Room stayed here for 5 nights very clean ",suite: @ExcellenceSuite1)
@ExcellenceSuiteRating=RatingSuite.create(rating: 5, name: "Billy", review: "Gorgeous Room stayed here for 9 nights very professional staff ",suite: @ExcellenceSuite2)
@ExcellenceSuiteRating=RatingSuite.create(rating: 5, name: "Johnny", review: "Gorgeous Room no complaints hand down. ",suite: @ExcellenceSuite3)





@Sanctuary= Hotel.create(name: "Sanctuary Resorts" , imgurl: "https://www.tripsavvy.com/thmb/CZCY8RZqHfdaD8YzE96TQqSALI4=/1400x930/filters:fill(auto,1)/sanctuarycapcana-578d08e85f9b584d20f1219d.jpg", price: 350, location: @Dominican)
@SanctuaryExcursion= Excursion.create(name: "Horse Riding On Beach" , imgurl: "https://s3-media0.fl.yelpcdn.com/bphoto/smPKAgrnY3Tdrdek4yMRoQ/o.jpg", price: 150, description: "Spend the day with us at the beach with friends, horses,and drinks on the house!", hotel: @Sanctuary )
@SanctuaryExcursion= Excursion.create(name: "SkyDiving" , imgurl: "https://www.skydivecarolina.com/wp-content/uploads/DSCF5395.jpg", price: 350, description: "Want the thrill of a life-time? Want to face your fear of heights? Come sky-dive with us today!", hotel: @Sanctuary )
@SanctuaryRating=Rating.create(reviewrating: 4, name: "Andri", review: "A great 5 star resort to relax at",hotel: @Sanctuary)
@SanctuarySuite1= Suite.create(name: "Junior Suite" , imgurl: "https://www.royalcaribbeanblog.com/sites/default/files/fb/1452882948_AN-AccSpaJuniorCatSJ.jpg", price: 120, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Sanctuary )
@SanctuarySuite2= Suite.create(name: "Deluxe Suite" , imgurl: "https://cdn.sandals.com/sandals/v12/images/resorts/src/home/src-luxurious-suite.jpg", price: 190, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Sanctuary )
@SanctuarySuite3= Suite.create(name: "Swim Up Suite" , imgurl: "https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/swim-up-950x530.jpg", price: 150, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Sanctuary )
@SanctuaryEntertainment= Entertainment.create(name: "Kayaking" , imgurl: "http://puntacanadominicanrepublic.com/wp-content/uploads/punta-cana-kayaking-dominican-republic-3.jpg", price: 30, description: "Sanctuary Clear water Kayak entertainment offers you, your friends and your family an unforgettable experience. While enjoying the the tropical settings of the Dominican Republic be prepared to be amazed at all the the underwater marine life and beautiful crystal clear waters without getting wet. Kayaking will never be the same after you try these absolutely stunning transparent kayaks.", hotel: @Sanctuary )
@SanctuaryRating=RatingEntertainment.create(rating: 5, name: "John", review: "A great day to kayak it was ",entertainment: @SanctuaryEntertainment)
@SanctuarySuiteRating=RatingSuite.create(rating: 5, name: "Bob", review: "Gorgeous Room stayed here for 5 nights very clean ",suite: @SanctuarySuite1)
@SanctuarySuiteRating=RatingSuite.create(rating: 5, name: "Billy", review: "Gorgeous Room stayed here for 9 nights very professional staff ",suite: @SanctuarySuite2)
@SanctuarySuiteRating=RatingSuite.create(rating: 5, name: "Johnny", review: "Gorgeous Room no complaints hand down. ",suite: @SanctuarySuite3)

@Albania= Location.create(name: "Albania",distance: 4646, imgurl: "https://www.opensignal.com/sites/opensignal-com/files/styles/market_insight_featured_large/public/data/images/national/data-2021-04-albania/albania.png?itok=A51dtDRN", price: 1500)

@Sandy= Hotel.create(name: "Sandy Beach Resort" , imgurl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269795487.jpg?k=1e5a3ff89444b98cc9b7ec96a241e62caebc792bfeafa715dced741ab8bfa5bc&o=&hp=1", price: 130, location: @Albania)
@SandyExcursion= Excursion.create(name: "Spear Fishing" , imgurl: "https://spearfishingbaja.mx/wp-content/uploads/2017/10/spearfishing-baja-california-mexico.jpg", price: 170, description: "Ever wanted to hunt in the ocean? Come join our professionals today in a 4 hour spear-fishing event! (Drinks+Food Included)", hotel: @Sandy )
@SandyExcursion= Excursion.create(name: "Swimming With Sharks" , imgurl: "https://miro.medium.com/max/10834/1*rcHtosJCDr8Njqaj1GUb9w.jpeg", price: 150, description: "Ever wanted to swim with the oceans terrfying predators? Now with the help of our professionals you can!", hotel: @Sandy )
@SandyRating=Rating.create(reviewrating: 4, name: "Rocky", review: "A great 5 star resort to Party at",hotel: @Sandy)
@SandySuite1= Suite.create(name: "Junior Suite" , imgurl: "https://s7d2.scene7.com/is/image/ritzcarlton/laxlz-junior-suite-50675038?$XlargeViewport100pct$", price: 120, description: "Each of our expansive suites at Paradise Resorts comes with a host of tailored All Inclusive amenities so you will want for nothing during your next adults only vacation. Cozy king sized beds, spacious spa-like bathrooms, a selection of in-suite liquors, and dreamy outdoor spaces make your next stay a true delight.", hotel: @Sandy )
@SandySuite2= Suite.create(name: "Deluxe Suite" , imgurl: "https://s7d2.scene7.com/is/image/ritzcarlton/custom_RCARUBA_00102_2123941_conversion?$XlargeViewport100pct$", price: 190, description: "Book a stay in our superior selection of Deluxe Club suites for a heightened level of pampering and unabashed luxury. Designed for those who seek a truly exclusive getaway, the Deluxe Club provides its guests with perks like private beach areas, exclusive pools, luxury lounges, and special restaurants and bars.", hotel: @Sandy )
@SandySuite3= Suite.create(name: "Swim Up Suite" , imgurl: "https://www.sandals.com/blog/content/images/2019/12/Crystal-Lagoon-Swim-up-Club-Level-Luxury-Room3.jpg", price: 150, description: "Revel in lazy rivers, bask in sunshine in your own swim-up suite with a charming Ocean view, enjoy lavish gardens and breathtaking mountain views from your terrace, or relax by the palm-filled coastlines while being immersed in the atmosphere the Paradise Resorts property you select. Breakfast in bed will make your stay more than perfect so you can return home with blissful memories then repeat two or even three times per year.", hotel: @Sandy )
@SandyEntertainment= Entertainment.create(name: "Kayaking" , imgurl: "https://albania-adventure.com/sites/default/files/14_0_0.jpg", price: 100, description: "Albania Kayak entertainment provides you, your friends and your family an unforgettable experience. While enjoying the the tropical settings of the Balkan waters be prepared to be amazed at all the the underwater marine life and beautiful crystal clear waters without getting wet. Kayaking will never be the same after you try these absolutely stunning transparent kayaks.", hotel: @Sandy )
@SandyRating=RatingEntertainment.create(rating: 5, name: "Andri", review: "A great day overall would go kayaking again with their team! ",entertainment: @SandyEntertainment)
@SandySuiteRating=RatingSuite.create(rating: 5, name: "Bob", review: "Gorgeous Room stayed here for 5 nights very clean ",suite: @SandySuite1)
@SandySuiteRating=RatingSuite.create(rating: 5, name: "Billy", review: "Gorgeous Room stayed here for 9 nights very professional staff ",suite: @SandySuite2)
@SandySuiteRating=RatingSuite.create(rating: 5, name: "Johnny", review: "Gorgeous Room no complaints hand down. ",suite: @SandySuite3)


puts "Created The Files!"