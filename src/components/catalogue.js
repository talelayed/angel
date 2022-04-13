import * as React from 'react';
import {Data} from "./data"
import ActionAreaCard from "./itemCard"

export default function Catalogue(){
    return(
        <div style={{marginTop:"30px",textAlign:"center"}}>
        <h1>CATALOGUE</h1>
        <hr style={{width:"80%",margin:"auto",marginBottom:"50px"}}/>
         <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"15px",width:"80%"}}>
         {Data.map((elt,key) => <ActionAreaCard key = {key} name = {elt.name} imgUrl = {elt.imgUrl} price={elt.price} id={elt.id}/> )}
         </div>
        </div>
    )
}