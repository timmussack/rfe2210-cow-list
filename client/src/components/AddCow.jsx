import React from 'react'
import { useState } from 'react'

const AddCow = ({ cow, onAddCow }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return(

    <>
    <input
     placeholder='Cow name'
     value={name}
     onChange={e => setName(e.target.value)}
     />

    <input
     size='50'
     placeholder='Cow description'
     value={description}
     onChange={e => setDescription(e.target.value)}
     />

    <button onClick={() => {
      setName('');
      setDescription('');
      onAddCow(name, description);
    }}>Add</button>

    </>

  )
}

export default AddCow;