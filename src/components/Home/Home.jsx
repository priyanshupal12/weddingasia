import React from 'react'
import Hero from '../Hero/Hero'
import Eventshowcase from '../EventShowcase/Eventshowcase'
import Upcomingevent from '../UpcomingEvent/Upcomingevent'
import WeddingStory from '../WeddingStory/WeddingStory'


function Home() {
  return (
    <React.Fragment>

      <Hero />
      <Upcomingevent />
      <Eventshowcase />
      <WeddingStory/>
 

      {/* Add more components here as needed */}
    </React.Fragment>
  )
}

export default Home
