import * as React from 'react';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './itemCard';
import Button from '@mui/material/Button';
import  { useState , useRef} from 'react'

export default function Publish(){
    const [list , setList] = useState([{imgUrl:"https://images-na.ssl-images-amazon.com/images/I/416Ecx-WB2L._AC_SY580_.jpg", name:"hoodie", price:"55dt"}])
    const nameRef = useRef();
    const priceRef = useRef();
    const urlRef = useRef();
    const addProduct = () => {
        setList([...list,<ActionAreaCard name={nameRef.current.value} price={priceRef.current.value} imgUrl={urlRef.current.value}/>])
    }
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>PUBLISH YOUR PRODUCT</h1>
         <div style={{display:"flex",justifyContent:"space-around"}}>
         <TextField inputRef={nameRef} label="Product name"  focused />
         <TextField inputRef={priceRef} label="Product price" focused />
         <TextField inputRef={urlRef} label="Product url" focused />
         <Button onClick={addProduct} style={{height:"50px"}} variant="contained">Publish</Button>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
             {list.map(elt=><ActionAreaCard imgUrl={elt.imgUrl} name={elt.name} price={elt.price} />)}
         </div>
        </div>
    )
}