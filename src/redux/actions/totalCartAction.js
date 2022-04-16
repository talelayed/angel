import { TOTALCART } from "./actionTypes"



export default function totalCart(price,quantity){
    return({
        type:TOTALCART,
        price:price,
        quantity:quantity
    })
}