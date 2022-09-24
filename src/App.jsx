import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Info />
    </div>
  )
}

export default App
