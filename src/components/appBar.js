export default function AppBar(){
    return(
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#aaaeb4",padding:"5px"}}>
            <img src="/imgs/Logo.png" style={{height:"40px"}}/>
            <div style={{display:"flex",justifyContent:"space-between",padding:"0.4%"}}>
                <a style={{paddingRight:"10px"}}><b>HOME</b></a>
                <a style={{paddingRight:"10px"}}><b>SHOP</b></a>
                <a style={{paddingRight:"10px"}}><b>PUBLISH</b></a>
                <a style={{paddingRight:"10px"}}><b>CART</b></a>
            </div>
        </div>
    )
}