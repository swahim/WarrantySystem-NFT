import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UploadImage from './pages/UplaodImages'
import UploadingMetadata from './pages/AddingAttributes'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ShopPage from './pages/Shop/ShopPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
