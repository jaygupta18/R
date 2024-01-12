import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
let myobj={
  username:"jay",
  age:21
}

let myarr=[4,5,3,5];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test </h1>
     <Card username="chai aur code_ " btntext=" click-me" someobj={myarr}/>
     <Card username=" hitesh_ "  btntext=" visit-me"/>

 
    </>
  )
}

export default App
