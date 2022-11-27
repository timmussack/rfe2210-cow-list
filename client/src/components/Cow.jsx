import React from 'react'
import { useState } from 'react';

const Cow = ({ cow, handleCowClick }) => {

  return(
    <>
    <div>
      <p style={{cursor: 'pointer'}} onClick={()=>
        handleCowClick(cow.name, cow.description)}>{cow.name}</p>
    </div>
    </>



  )
}

export default Cow;