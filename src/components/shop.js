import * as React from 'react';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './itemCard'
import Button from '@mui/material/Button';
import  { useState , useRef} from 'react'
import  {useParams} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
export default function Shop(){
    let {id} = useParams()
    const nameRef = useRef();
    const priceRef = useRef();
    const urlRef = useRef();
    const list = useSelector(state => state.searchReducer)
    
    const [searchProduct,setSearchProduct]=useState("")
    const handleChange=(e)=>setSearchProduct(e.target.value)
    const filterProduct=list.filter((el)=>el.name.toLowerCase().includes(searchProduct.toLowerCase())||el.price===searchProduct)
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>SHOP</h1>
        <hr style={{width:"80%",margin:"auto",marginBottom:"50px"}}/>
         <div style={{display:"flex",justifyContent:"space-around"}}>
             <div style={{display:"flex"}}>
             <h3 style={{marginRight:"15px"}}>SEARCH</h3>
            <TextField  label="Name" focused onChange={handleChange} />
             </div> 
         <Button style={{height:"50px"}} variant="contained">Search</Button>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
             {filterProduct.map((elt,key)=><ActionAreaCard key = {key} imgUrl={elt.imgUrl} name={elt.name} price={elt.price} id={elt.id}/>)}
         </div>
         
        </div>
    )
}