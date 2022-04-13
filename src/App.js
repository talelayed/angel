import './App.css';
// import AppBar from './components/appBar';
import Cart from './components/cart';
import Publish from './components/publish';
import Shop from './components/shop';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Background from './components/background';
import Product from './components/product';


export default function App() {
  const navigate = useNavigate()
  return (
    <>
    <Background/>
            <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#aaaeb4",padding:"5px"}}>
            <img src="/imgs/Logo.png" style={{height:"40px"}}/>
            <div style={{display:"flex",justifyContent:"space-between",padding:"0.4%"}}>
                <a onClick={()=>navigate('/')} style={{paddingRight:"10px",cursor:"pointer"}}><b>HOME</b></a>
                <a onClick={()=>navigate('/shop/1')} style={{paddingRight:"10px",cursor:"pointer"}}><b>SHOP</b></a>
                <a onClick={()=>navigate('/publish/2')} style={{paddingRight:"10px",cursor:"pointer"}}><b>PUBLISH</b></a>
                <a onClick={()=>navigate('/cart/3')} style={{paddingRight:"10px",cursor:"pointer"}}><b>CART</b></a>
            </div>
        </div>
    <Routes>
      <Route path='/' element={<Catalogue/>}/>
      <Route path='/shop/:id' element={<Shop/>}/>
      <Route path='/cart/:id' element={<Cart/>}/>
      <Route path='/publish/:id' element={<Publish/>}/>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
    </>
  );
}