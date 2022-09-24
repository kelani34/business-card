import { useState } from 'react'
import './App.css'
import Info from './info'
import About from './About'
import Interest from './Interest'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App
