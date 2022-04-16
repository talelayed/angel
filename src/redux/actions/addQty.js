import { ADDQTY } from "./actionTypes"


export const addQty = (id,quantity) => {
    return({
        type:ADDQTY,
        payload:{
            id:id,
            quantity:quantity
        }
    })
}