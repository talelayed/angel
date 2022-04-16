import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function ActionAreaCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image={props.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}dt
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{display:"flex",justifyContent:"space-around",padding:"5%"}}>
         <Rating style={{marginTop:"auto",marginBottom:"auto"}} name="size-small" defaultValue={4} size="small" />
         <Button onClick={()=>navigate(`/product/${props.id}`)}style={{height:"30px",marginTop:"auto",marginBottom:"auto"}} variant="contained">Buy</Button>
      </div>
    </Card>
  );
}