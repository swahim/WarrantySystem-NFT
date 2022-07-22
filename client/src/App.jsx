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
import ProductPage from './pages/Product/productPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/shop/product" element={<ProductPage />} />
        </Routes>
      </Router>
      {/* <UploadImage /> */}
    </>
  )
}

export default App
