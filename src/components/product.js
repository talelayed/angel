import * as React from "react"
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addToCart } from './../redux/actions/addToCartAction'
import totalCart from './../redux/actions/totalCartAction'
import Rating from '@mui/material/Rating';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import {Data} from './data'


export default function Product(){
    const dispatch = useDispatch()
    const {id} = useParams()

    return(
        <>
          {
              (Data.filter((elt)=>elt.id == id)).map((elt,key)=><div key={key} style={{display:"flex"}}>
              <img style={{maxWidth:"40%",margin:"20px",borderRadius:"15px",textAlign:"center"}} src={elt.imgUrl}/>
              <div style={{marginLeft:"20px",marginTop:"100px",width:"100%"}}>
              <h2 style={{fontSize:"40px"}}>{elt.name}</h2>
              <h4 style={{fontSize:"20px",color:"gray"}}>{elt.price}dt</h4>
              <Rating style={{marginTop:"auto",marginBottom:"auto"}} name="size-small" defaultValue={4} size="medium" />
              <div>
              <Button onClick={()=>{dispatch( addToCart(elt.imgUrl,elt.name,elt.price,elt.id) );dispatch( totalCart(elt.price))}} style={{width:"100px",marginTop:"20px",marginBottom:"auto"}} variant="contained">Buy</Button>
              </div>
              </div>
          </div>)
          }
        </>
    )
}