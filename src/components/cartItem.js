import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { ButtonGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/actions/removeAction';
import { useRef } from 'react';
import { addQty } from '../redux/actions/addQty';

export default function ActionAreaCard(props) {
  const textRef = useRef()
  // const quantity = useSelector(state=>state.plusMinusQuantityReducer)
  // const totalItem = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const min=1
  const [totalItem , setTotalItem] = React.useState(props.price)
  return (
    <Card sx={{ minWidth: "100%" , display:"grid" ,gridTemplateColumns:"repeat(6,1fr)"}}>
        <img style={{maxHeight:"160px"}} src={props.imgUrl}/>
            <h3 style={{fontSize:"20px",marginTop:"auto",marginBottom:"auto"}}>{props.name}</h3>
            <h3 style={{fontSize:"20px",marginTop:"auto",marginBottom:"auto"}}>{props.price}dt</h3>
        <ButtonGroup size="small" aria-label="small outlined button group" style={{marginTop:"auto",marginBottom:"auto"}}>
            {/* <Button onClick={()=>{dispatch(minusQuantity());dispatch(majTotalItemCart(props.price,textRef.current.value))}}>-</Button> */}
            <input type="number" defaultValue={1} onChange={()=>{dispatch(addQty(props.id,2));setTotalItem(props.price*textRef.current.value)}} ref={textRef} style={{padding:"2px",margin:"auto",borderRadius:"4px", border:"1,5px solid black",width:"15%",textAlign:"center"}} min={1}/>
            {/* <Button onClick={()=>{dispatch(plusQuantity());;dispatch(majTotalItemCart(props.price,textRef.current.value))}}>+</Button> */}
        </ButtonGroup>
            <h3 style={{fontSize:"20px",marginTop:"auto",marginBottom:"auto"}}>{totalItem}dt</h3>
            <Button  onClick={()=>{dispatch(remove(props.id))}} style={{height:"30px",marginTop:"auto",marginBottom:"auto",width:"50%"}} variant="contained">Remove</Button>
        
      
    </Card>
  );
}