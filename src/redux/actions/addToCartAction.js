import { ADDTOCART } from "./actionTypes"

export const addToCart = (id) => {
    return ({
        type: ADDTOCART,
        payload:{
            id:id
        }
    }
    )
}