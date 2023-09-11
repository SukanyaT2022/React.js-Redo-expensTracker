import React from 'react'
import './DisplayItem.css'



function DisplayItem({keyStoreData}) {
  return (
    <>
{/* we use map to display array from line 9 in app.js */}
<div className='title'>
<h2>Item</h2>
<h2>Price</h2>
<h2 className='highLow'>High-Low</h2>
</div>
{keyStoreData.map((val)=>(
  <div className='mainBOx' key={val.id}>
    <div className='itemPrice'>
      <h2 className='targetItem'>{val.item}</h2>
    <h2 className='targetPrice'>{val.price}</h2>
    <div className='deleteButtonBigBox'><button className='deleteButton'>Delete</button></div>
    </div>
  </div>
  
))}

   
    </>
  )
}

export default DisplayItem