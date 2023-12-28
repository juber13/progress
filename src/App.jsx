import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const [value , setValue] = useState(0);

  useEffect(() => {
      const id =  setInterval(() => {
          setValue((prev) => prev + 1)
       },100)

       if(value>= 100) clearInterval(id)
  },[])

  console.log(value)

  return (
    <div className='app'>
      <h1> Progress Bar</h1>
      <ProgressBar value={value}/>
      <p>{value >= 100 ? "Completed!" : "Loding..."}</p>

    </div>
  )
}

export default App
