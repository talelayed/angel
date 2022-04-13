import { REMOVE } from "./actionTypes"

export const remove = (id,price) => {
    return({
        type: REMOVE,
        id: id,
        price:price
    })
}