import * as React from 'react';
import ActionAreaCard from './cartItem'
import { useDispatch,useSelector } from 'react-redux';

export default function Publish(){
    const list = useSelector(state=>state.cartReducer)
    const total = useSelector(state=>state.totalCartReducer)

    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>CART</h1>
        <hr style={{width:"80%",margin:"auto",marginBottom:"50px"}}/>
         <div style={{display:"grid",gridRowGap:"10px",margin:"auto",paddingTop:"15px",width:"80%"}}>
             {list.map((elt,key)=><ActionAreaCard key = {key} imgUrl={elt.imgUrl} name={elt.name} price={elt.price} id={elt.id}/>)}
         </div>
         {/* <hr style={{width:"80%",margin:"auto",marginTop:"50px"}}/> */}
         <div  style={{marginLeft:"80%",width:"100px"}}>
           <h3>total: {total.total}dt </h3>
         </div>
        </div>
    )
}