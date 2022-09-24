import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './info'
import About from './About'
import Interest from './Interest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Info />
      <About />
      <Interest />
    </div>
  )
}

export default App
