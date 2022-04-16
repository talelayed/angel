import './App.css';
// import AppBar from './components/appBar';
import Cart from './components/cart';
import Publish from './components/publish';
import Shop from './components/shop';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Background from './components/background';
import Product from './components/product';
import AppBar from './components/appBar';
import { Footer } from './components/footer';



export default function App() {
  const navigate = useNavigate()
  return (
    <>
    <Background/>
         <AppBar/> 
       
    <Routes>
      <Route path='/' element={<Catalogue/>}/>
      <Route path='/shop/:id' element={<Shop/>}/>
      <Route path='/cart/:id' element={<Cart/>}/>
      <Route path='/publish/:id' element={<Publish/>}/>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
    <Footer/>
    </>
  );
}