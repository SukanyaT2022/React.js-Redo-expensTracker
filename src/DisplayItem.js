import React from 'react'
import './DisplayItem.css'
import { FaArrowUp,FaArrowDown } from "react-icons/fa";


    {/* {keystoreData} is array */}
function DisplayItem({keyStoreData, nameSetStoreData}) {

const deleteButton=(id)=>{
  //deleteButton have to have event- onclick-  it excute function 
  //newArray hold data after filter
const newArray = keyStoreData.filter((value)=>value.id != id)
//if id not match so it will store inside of new array
nameSetStoreData(newArray)
}

const sortedFunction=(price)=>{
  if (price == "high2Low"){
    const sortedArray = [...keyStoreData].sort((a,b)=>a.price - b.price)
    nameSetStoreData(sortedArray)
  }else{
    const sortedArray = [...keyStoreData].sort((a,b)=>b.price - a.price)
    nameSetStoreData(sortedArray)
  }
//save in original array below

}
//with
//sort function High Low
// const high2Low=()=>{
//   const sortedArray = [...keyStoreData].sort((a,b)=>a.price - b.price)
// //save in original array below
// nameSetStoreData(sortedArray)

// }
// const low2High=()=>{
//   const sortedArray = [...keyStoreData].sort((a,b)=>b.price - a.price)
//   //save in original array below
//   nameSetStoreData(sortedArray)
// }



  return (
    <>
{/* we use map to display array from line 9 in app.js */}
<div className='title'>
<h2>Item</h2>
<h2>Price</h2>

<div className='highLow'>
{/* <button className='updownButton' onClick={high2Low}><FaArrowDown/></button>
    <button className='updownButton'onClick={low2High}><FaArrowUp/></button> */}

    <button className='updownButton' onClick={()=>sortedFunction("high2Low")}><FaArrowDown/></button>
    <button className='updownButton'onClick={()=>sortedFunction("low2high")}><FaArrowUp/></button>
</div>
</div>

{keyStoreData.map((val)=>(
  <div className='mainBOx' key={val.id}>
    <div className='itemPrice'>
      <h2 className='targetItem'>{val.item}</h2>
    <h2 className='targetPrice'>{val.price}</h2>
    <div className='deleteButtonBigBox'>
      <button className='deleteButton'
       onClick={()=>deleteButton(val.id)}>Delete</button>
      </div>
    </div>
  </div>
  
))}
    </>
  )
}

export default DisplayItem