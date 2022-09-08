import React from 'react'
import '../css/WhyLearn.css'
import '../css/Browsecourse.css'
import WhyLearnCardData from './WhyLearnCardData'
import WhyLearnCard from './WhyLearnCard'

function WhyLearn() {


    
function WhyCard (text) {

    return  <WhyLearnCard 
          key = {text.id}
          learntag = {text.learntag}
          img = {text.img}
    />
  }

  return (

    <div className='course-section '>
        <p className='Top-text'>Why Gecko</p>
       <h5 className='h5-text'>Why Learn on Gecko</h5>
       <div  className='wrapper-grid-two'>
       {WhyLearnCardData.map(WhyCard)}
       </div>
    </div>
  )
}

export default WhyLearn