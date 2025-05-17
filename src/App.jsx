import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Multipleinp from './Multipleinp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Multipleinp></Multipleinp>
    </>
  )
}

export default App
