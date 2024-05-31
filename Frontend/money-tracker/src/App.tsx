
import { useState } from 'react'
import './App.css'

function App() {
  const [amount,setAmount]=useState('');
  const [date,setDate]=useState('');
  const [description,setDescription]=useState('')

  return (
    <>
    <div className="salary">
      <h1><span>SALARY  </span>10000$</h1>
    </div>
    <div className="remaining"><h2><span>EXPENDITURE  </span>600$</h2></div>
    <div className="expenditureInfo">
      <form className='container'>
        <div className='details'>
        <input type="text" 
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        placeholder='Amount'
        />
        <input type="datetime-local"
        value={date}
        onChange={(e)=>setDate(e.target.value)}/>
        <input  type="text" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder='Description'/>
        </div>
        <button className='buttons' type='submit'>New transaction</button>
        

      </form>
    </div>
    <div className="expenditureList"></div>
  
    </>
  )
}

export default App
