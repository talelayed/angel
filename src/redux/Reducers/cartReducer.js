import { ADDTOCART, REMOVE } from "../actions/actionTypes";

const initState = [ 
]

export const cartReducer = (state = initState ,action) => {
    switch (action.type) {
        case REMOVE:
            {return state.filter(elt=>elt.id != action.id)}
        case ADDTOCART:
            return [...state,{imgUrl:action.imgUrl,name:action.name,price:action.price,id:action.id}]
            
    
        default: return state
    }
} 