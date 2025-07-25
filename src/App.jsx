import AuthPage from './Pages/AuthPage';
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import ProductDetails from './Pages/ProductDetails';
import KnowFokus from './Pages/KnowFokus';
import CartPage from './Pages/CartPage';
import { useState } from 'react'
import Loader from './Pages/Loader';
const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  const [loading, seLoading] = useState(true);
  return (

    <>
     {
        loading && <Loader onFinish={() => seLoading(false)} />

    }
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/knowfokus' element={<KnowFokus />} />
      <Route path='cart' element={ <CartPage />} />
    </Routes>
      
    </>
   
  )
}

export default App