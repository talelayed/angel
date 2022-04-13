import { ADDTOCART } from "./actionTypes"

export const addToCart = (imgUrl,name,price,id) => {
    return ({
        type: ADDTOCART,
        imgUrl: imgUrl,
        name: name,
        price: price,
        id: id
    }
    )
}