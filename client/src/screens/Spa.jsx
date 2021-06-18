import React from 'react'

const Spa = () => {


  let spapics=["https://www.advancedskincarespaandsalon.com/wp-content/uploads/2019/06/Spa-1.jpg","https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/561/129/1561129494_5d0cf2162a4bc-thumb.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/26/c3.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spa-treatment-room-1584039817.jpg","https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2018/08/1140-candlelight.web.jpg","https://www.msccruisesusa.com/-/media/global-contents/on-board/spa-beauty-and-fitness/enjoy_spa_01.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=360&mw=460&sc=0&thn=0&udi=0&hash=138888EB4899DDB2BBDF52C842E8CB09","https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-spa-3315-hor-feat.jpg"]
  let randomspapic=Math.floor(Math.random()*spapics.length)
  let SpaPic=spapics[randomspapic]
  console.log(randomspapic)
  return (
    
    <div>
      <header>
        <img style={{width:'100%', marginTop:"0px"}} src={SpaPic}/>
      </header>
      <h1 style={{ textAlign: 'center' }}>The Beloved Spa</h1>
      <hr></hr>
      <p style={{padding:'9px'}}>Come relax in the beloved Spa,free your Mind,Body,and Soul.
       We are dedicated to creating a unique atmosphere for you, and you alone.The herbs, plants,essential oils,skilled healing hands and knowledge of the ancient ways will guide you to a amazing experience. Let us lift your troubles away and enter paradise.
      </p>
      <p>Open 9:00 AM- 5:00 PM Daily</p>
      <p>Book a reservation at 1800-922-1928 EXT 222</p>
    </div>
  )
}

export default Spa
