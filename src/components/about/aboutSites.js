import React from 'react'
import Carousel from "./aboutCarousel"
import "./aboutSite.css"

function aboutSites() {
  return (
    <div className="aboutSite">
        <Carousel/>
        
        <div className="contact" >
        <div className="email">
          <h4>Email</h4>
          <p>nicolas.bictel@yahoo.com</p>
        </div>
        <div className="twitter">
          <h4>Twitter</h4>
          <p><a href="https://twitter.com/NBictel" target="blank">@NBictel</a></p>
        </div>
        <div className="github">
          <h4>Github</h4>
          <p><a href="https://github.com/Valhallaproject" target="blank">NBictel</a></p>
        </div>
      </div>
    </div>
  )
}

export default aboutSites