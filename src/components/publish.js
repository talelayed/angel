import * as React from 'react';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './itemCard';
import Button from '@mui/material/Button';
import  { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { publish } from '../redux/actions/publishAction';

export default function Publish(){
    const list = useSelector(state=>state.publishReducer)
    const dispatch = useDispatch()
    const nameRef = useRef();
    const priceRef = useRef();
    const urlRef = useRef(); 
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>PUBLISH YOUR PRODUCT</h1>
        <hr style={{width:"80%",margin:"auto",marginBottom:"50px"}}/>
         <div style={{display:"flex",justifyContent:"space-around"}}>
         <TextField inputRef={nameRef} label="Product name"  focused />
         <TextField inputRef={priceRef} label="Product price" focused />
         <TextField inputRef={urlRef} label="Product url" focused />
         <Button onClick={()=> dispatch(publish(nameRef.current.value,priceRef.current.value,urlRef.current.value))} style={{height:"50px"}} variant="contained">Publish</Button>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
             {list.map((elt,key)=><ActionAreaCard key = {key} imgUrl={elt.imgUrl} name={elt.name} price={elt.price}/>)}
         </div>
        </div>
    )
}