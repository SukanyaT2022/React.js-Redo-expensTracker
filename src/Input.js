import React, { useState } from 'react';
import './input.css';
//important below line 4 do not forget { }inside() coz code will not work
function Input({keysetStoreData}) {
  //day 2  we make state to hold info the user type on 2 input box
  //next we use onChange{} line14 --evn user type input onchnage set value on hold item
  const [holdItemInput, setHoldItemInput] = useState('');
  const [holdPriceInput, setHoldPriceInput] = useState('');
  //setstate help tp put data and remove data input from user

  const handleOnChange = (e) => {
    e.preventDefault();
    setHoldItemInput(e.target.value);
  };

  const handleSubmit = () => {
    //be low line onsep13--intention is we need to attach function to submit button-line 18 help to put data in store data- and push in array
//this function work when user type somthing on onput box the it show display section

    const newObject = {
      
      //id ramdom number so it give ramdom id from ramdom function
      //Math.floor(Math.random() * 10)  means generate randon id math.floor()help with change to full number not 2.3 but 2
      id: Math.floor(Math.random() * 10),
      item: holdItemInput,
      price: holdPriceInput,
 
  }
    keysetStoreData([newObject]);
    //2 line below after typeput and hit sumit --inputbox empty after
    setHoldItemInput('');
    setHoldPriceInput('');

  };
  //we put console outside function so check if user type on input and it show on console
  // console.log('item',holdItemInput)
  // console.log('price',holdPriceInput)
  return (
    <>
      <h2 className="h2Expense">Expense Tracker</h2>
      <div className="mainBox-input">
        {/* //sample 1 we crate function handle to work on onChange */}

        <input
          type="text"
          value={holdItemInput}
          placeholder=" Type Item"
          onChange={handleOnChange}
        />

        {/* //sample 2 is give the same result as sample one but function inside of onchange -- sample 1 and 2 is the same buit different way to do it*/}
        <input
          type="number"
          value={holdPriceInput}
          placeholder=" Type $ expense"
          onChange={(e) => setHoldPriceInput(e.target.value)}
        />
        <button onClick={ handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Input;

//important when user type something data will go to app.js at storedata state and then push so it can be display on displayItem.js

//how we can put data on another file by pass data
//how do we put data on input.js in app.js in storedata state
// answer putsetStoredata in app.ja in input.js

//question do we move setStoredata in app.ja to input.js by use key parent to child look below

//function Input(keysetStoreData) {
