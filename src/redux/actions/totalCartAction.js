import { TOTALCART } from "./actionTypes"



export default function totalCart(price){
    return({
        type:TOTALCART,
        price:price
    })
}