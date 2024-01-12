import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  //  variable , setvariable
  // let counter = 15
  const addvalue=()=>{
    // setcounter(counter + 1 )
    // console.log("value ",Math.random() ,counter)
    // setcounter(counter + 1 )
    // call go as a bunch of function 
    // setcounter(counter + 1 )
    // setcounter(counter + 1 )
    setcounter(prevcounter =>prevcounter +1)
    // THAT are the callbacks and this is the property of usestate

    setcounter(prevcounter =>prevcounter+1)
    setcounter(prevcounter =>prevcounter+1)
    setcounter(prevcounter =>prevcounter+1)


    // counter ++;
    // here value is not changed in UI  so we use hooks for updation in UI 
  } 
  const removevalue=()=>{
    setcounter(counter - 1 )
    
    console.log("value ",Math.random() ,counter)
    // counter ++;
    // here value is not changed in UI  so we use hooks for updation in UI 
  } 
  return (
    <>
      <h1> chai aur react </h1>
      <h2>counter value {counter}</h2>
      <button onClick={addvalue}> add value </button>
      <button onClick={removevalue}> remove value </button>
    </>
  )
}

export default App
