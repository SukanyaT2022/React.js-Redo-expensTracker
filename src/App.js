import React, { useState } from 'react'
import Input from './Input'
import './App.css';
import DisplayItem from './DisplayItem';

const App = () => {
  // step1 use array in Usestate--name arrays stroeData
  //step 2 display data storeDataArray we use javascript method to map value to display
const [storeData, setStoreData] = useState([
  {
    id: 1,
    item:"grocery",
    price: 2,
  },
  {
    id: 2,
    item:"car",
    price: 100,
  },
  {
    id: 3,
    item:"school",
    price: 300,
  },

])


return(
  <>
  <div className='mainBoxAppJS'>
    <Input />
   
    <button className='HighLowButton'>Low-High</button>
    <button className='HighLowButton'>High-Low</button>
    <DisplayItem keyStoreData ={storeData}/>
  </div>
  </>
  )}

export default App

//step 1 decide how many component
// this case 3 compoenent app.ja, displayItem, input

//step 2 inputcomponent has 2 inputbox and submit bottom
//step3 in app.js is parent of displayitem and inputcomponent
//step4 make a Usestate that has array of object
//step 5 pass array as props to display item in displayitem.js use {
  //step 6 in display item received the array in {}
  //the map it and return
  