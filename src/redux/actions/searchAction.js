import { SEARCH } from "./actionTypes"

export const searchAction = (url , name , price , id) => {
    return({
        type: SEARCH,
        imgUrl:url,
        name:name,
        price:price,
        id: id
    })
}