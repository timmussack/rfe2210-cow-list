import React from 'react'
import Cow from './Cow.jsx'

const CowList = ( { cows, setCows, handleCowClick }) => {

  return(

    <div>
      <h4>Cows on the farm</h4>
      {cows.map(cow => <Cow cow={cow} key={cow.id} handleCowClick={handleCowClick}/>)}
    </div>

  )
}

export default CowList;