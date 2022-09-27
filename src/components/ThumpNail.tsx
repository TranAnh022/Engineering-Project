import React from 'react'
import "./index.css"
const thumpNail = require("../assets/thumpNail.jpeg")


const ThumpNail = () => {
  return (
      <div className='container container_thumpNail d-flex mb-3'>
        <div className='shadow_card'></div>
            <img src={thumpNail} alt="" className="fluid" id="thumpNail" />

            <div className='content'>
                <h1><b>Useful tool for estimating the material</b></h1>
            </div>


    </div>
  )
}

export default ThumpNail