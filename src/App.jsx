import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Button />
    </div>
  )
}

export default App
