import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadImage from './pages/UplaodImages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UploadImage />
    </div>
  )
}

export default App
