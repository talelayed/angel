import { PUBLISH } from "./actionTypes";

export const publish= (name,price,imgUrl) =>{
return({
    type : PUBLISH,
    imgUrl: imgUrl,
    name: name,
    price: price
})}