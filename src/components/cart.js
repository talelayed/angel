import * as React from 'react';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './cartItem'
import  { useState , useRef} from 'react'

export default function Publish(){
    const [list , setList] = useState([ {imgUrl:"https://images-na.ssl-images-amazon.com/images/I/416Ecx-WB2L._AC_SY580_.jpg", name:"hoodie", price:"55dt"},
    {imgUrl:"https://i.pinimg.com/originals/bd/90/d5/bd90d5017dcd0c1924fe63cb32b472bb.jpg", name:"stickers", price:"15dt"} ,
    {imgUrl:"http://cdn.shopify.com/s/files/1/1982/7331/products/01_02_1200x1200.jpg?v=1641882818", name:"tie dye", price:"35dt"}])
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>CART</h1>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"15px",width:"80%"}}>
             {list.map((elt)=><ActionAreaCard imgUrl={elt.imgUrl} name={elt.name} price={elt.price}/>)}
         </div>
        </div>
    )
}