import { MAJTOTALITEMCART } from "./actionTypes"

export const majTotalItemCart = (price,quantity) =>{
    return({
    type: MAJTOTALITEMCART,
    price:price,
    quantity:quantity
})
}