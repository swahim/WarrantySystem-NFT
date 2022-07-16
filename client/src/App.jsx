import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadImage from './pages/UplaodImages'
import UploadingMetadata from './pages/AddingAttributes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <UploadImage /> */}
      <UploadingMetadata />
    </div>
  )
}

export default App
