import React from 'react'
import './input.css';

function Input() {
  return (
    <>
    <h2 className='h2Expense'>Expense Tracker</h2>
    <div className='mainBox-input'>
<input type="text" placeholder=' Type Item'  />
<input type="number" placeholder=' Type $ expense' />
<button>Submit</button>

    </div>
    </>
  )
}

export default Input