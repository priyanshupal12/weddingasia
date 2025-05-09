import React from 'react'

import Eventshowcase from '../EventShowcase/Eventshowcase';
import Upcomingevent from '../UpcomingEvent/Upcomingevent';
// import WeddingStory from '../WeddingStory/WeddingStory';
import Journal from '../Journal/Journal';
import ClientsSlider from '../Hero/Clientslider';
import Hero from '../Hero/hero';


function Home() {
  return (
    <React.Fragment>

     <Hero/>
      <ClientsSlider/>
      <Upcomingevent />
      {/* <Eventshowcase /> */}
      {/* <WeddingStory/> */}
      {/* <Journal/> */}
 

      {/* Add more components here as needed */}
    </React.Fragment>
  )
}

export default Home
