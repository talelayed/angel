import * as React from 'react';
import TextField from '@mui/material/TextField';
import ActionAreaCard from './itemCard'
import Button from '@mui/material/Button';
import  { useState , useRef} from 'react'
import  {useParams} from "react-router-dom"
import { Data } from './data';
import { useDispatch,useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';

export default function Shop(){
    let {id} = useParams()
    const nameRef = useRef();
    const priceRef = useRef();
    const urlRef = useRef();
    const list = useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>SHOP</h1>
        <hr style={{width:"80%",margin:"auto",marginBottom:"50px"}}/>
         <div style={{display:"flex",justifyContent:"space-around"}}>
             <div style={{display:"flex"}}>
             <h3 style={{marginRight:"15px"}}>SEARCH</h3>
            <TextField inputRef={nameRef} label="Name" focused />
             </div> 
         <TextField inputRef={priceRef} label="Price" focused />
         <TextField inputRef={urlRef} label="image Url" focused />
         <Button onClick={()=>dispatch(searchAction(urlRef.current.value,nameRef.current.value,priceRef.current.value))} style={{height:"50px"}} variant="contained">Search</Button>
         </div>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
             {list.map((elt,key)=><ActionAreaCard key = {key} imgUrl={elt.imgUrl} name={elt.name} price={elt.price} id={elt.id}/>)}
         </div>
         
        </div>
    )
}