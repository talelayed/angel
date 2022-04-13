import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Publish from './cart'
import { ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/actions/removeAction';
import { useRef } from 'react';

export default function ActionAreaCard(props) {
  const dispatch = useDispatch()
  const textRef = useRef()
  
  return (
    <Card sx={{ minWidth: "100%" , display:"grid" ,gridTemplateColumns:"repeat(6,1fr)"}}>
        <img style={{maxHeight:"160px"}} src={props.imgUrl}/>
            <h3 style={{marginTop:"auto",marginBottom:"auto"}}>{props.name}</h3>
            <h3 style={{marginTop:"auto",marginBottom:"auto"}}>{props.price}dt</h3>
        <ButtonGroup size="small" aria-label="small outlined button group" style={{marginTop:"auto",marginBottom:"auto"}}>
            <Button>-</Button>
            <input type="text" ref={textRef} style={{width:"15%",textAlign:"center"}} value="2" />
            <Button onClick={()=> console.log((parseFloat(textRef.current.value))*(parseFloat(props.price)))}>+</Button>
        </ButtonGroup>
            <h3 style={{marginTop:"auto",marginBottom:"auto"}}>{(parseFloat(textRef.current.value))*(parseFloat(props.price))}dt</h3>
            <Button  onClick={()=>dispatch(remove(props.id,props.price))} style={{height:"30px",marginTop:"auto",marginBottom:"auto",width:"50%"}} variant="contained">Remove</Button>
        
      
    </Card>
  );
}