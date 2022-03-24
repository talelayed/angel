import './App.css';
import AppBar from './components/appBar';
import Cart from './components/cart';
import Publish from './components/publish';
import Shop from './components/shop';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Catalogue from './components/catalogue';

export default function App() {
  const navigate = useNavigate()
  return (
    <>
            <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#aaaeb4",padding:"5px"}}>
            <img src="/imgs/Logo.png" style={{height:"40px"}}/>
            <div style={{display:"flex",justifyContent:"space-between",padding:"0.4%"}}>
                <a onClick={()=>navigate('/')} style={{paddingRight:"10px"}}><b>HOME</b></a>
                <a onClick={()=>navigate('/shop')} style={{paddingRight:"10px"}}><b>SHOP</b></a>
                <a onClick={()=>navigate('/publish')} style={{paddingRight:"10px"}}><b>PUBLISH</b></a>
                <a onClick={()=>navigate('/cart')} style={{paddingRight:"10px"}}><b>CART</b></a>
            </div>
        </div>
    <Routes>
      <Route path='/' element={<Catalogue/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/publish' element={<Publish/>}/>
    </Routes>
    </>
  );
}