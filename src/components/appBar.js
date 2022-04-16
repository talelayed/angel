import { useNavigate } from "react-router-dom";

export default function AppBar(){
  const navigate=useNavigate()
    return(
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px",margin:"10px",borderRadius:"15px",backgroundImage:`url('/imgs/neon3.webp')`}}>
        <img src="/imgs/Logo.png" style={{height:"40px"}}/>
        <div style={{display:"flex",justifyContent:"space-between",padding:"0.4%"}}>
            <a onClick={()=>navigate('/')} style={{paddingRight:"10px",cursor:"pointer"}}><b>HOME</b></a>
            <a onClick={()=>navigate('/shop/1')} style={{paddingRight:"10px",cursor:"pointer"}}><b>SHOP</b></a>
            <a onClick={()=>navigate('/publish/2')} style={{paddingRight:"10px",cursor:"pointer"}}><b>PUBLISH</b></a>
            <a onClick={()=>navigate('/cart/3')} style={{paddingRight:"10px",cursor:"pointer"}}><b>CART</b></a>
        </div>
    </div>
    )
}