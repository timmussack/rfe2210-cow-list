import React from 'react';
//import * from 'react'; --> DON'T USE, WILL BREAK IT.
import CowList from './CowList.jsx'
import AddCow from './AddCow.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

// const testData = [
//   {
//     name: 'Brownie',
//     description: 'This cow is weighs 1400 pounds and is brown. She is 4 years old. Her favorite hobby is eating green grass.',
//     id: 1
//   },
//   {
//     name: 'Big Horns',
//     description: 'This cow is weighs 1800 pounds and is black. He is 8 years old. His favorite hobby is resting in the pasture.',
//     id: 2
//   },
//   {
//     name: 'Bessie',
//     description: 'This cow is weighs 900 pounds and is white with black spots. She is 2 years old. Her favorite hobby is jumping the fence.',
//     id: 3
//   }
// ]

const App = () => {
const [cows, setCows] = useState([])
const [popName, setPopName] = useState('');
const [popDes, setPopDes] = useState('');

useEffect(()=> {
  axios.get('/cows')
    .then((response) => {
      console.log('From the server', response.data);
    })
    .catch((error) => {
      console.log('Error from axios get', error)
    })
}, []);


const handleCowClick = (name, description) => {
  console.log(name, description)
  setPopName(name);
  setPopDes(description);
  //setShow(!show);
}

const handleAddCow = (name, description) => {
  console.log(name, description)
  axios.post('/cows', {
    name: name,
    description: description,
  })
  .then((res) => {
    //run setCows after we get a saved response
    console.log(res)
  })
  .catch((e) => {
    console.log('Error from axios post', e)
  })
}
  return(

    <div>
      <h1>Welcome to Cow List!</h1>
      <AddCow onAddCow={handleAddCow}/>
      <div style={{cursor: 'pointer'}} onClick={() => {
        setPopName('');
        setPopDes('');
      }}>
      <h2> {popName}</h2>
      <p>{popDes}</p>
      </div>

      <CowList handleCowClick={handleCowClick} cows={cows} setCows={setCows}/>
    </div>

  )

}

export default App;