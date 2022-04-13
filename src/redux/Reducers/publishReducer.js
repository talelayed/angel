import { PUBLISH } from "../actions/actionTypes";

const initState = [{imgUrl:"https://images-na.ssl-images-amazon.com/images/I/416Ecx-WB2L._AC_SY580_.jpg", name:"hoodie", price:"55"}]


export const publishReducer = (state = initState , action) =>{
    switch (action.type) {
        case PUBLISH:
            return [...state, {name:action.name, price:action.price,imgUrl:action.imgUrl}]
        default: return state
    }
}