import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponent from './MainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <MainComponent></MainComponent>
    </>
  )
}

export default App
