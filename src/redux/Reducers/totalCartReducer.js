import { ADDTOCART, REMOVE } from "../actions/actionTypes";

const initState={
    total:0
}

export default function totalCartReducer(state = initState , action){
    switch (action.type) {
        case ADDTOCART:
            return{
                ...state,total : parseFloat(state.total) + parseFloat(action.price)
            }
        case REMOVE:
            return{
                ...state,total : parseFloat(state.total) - parseFloat(action.price)
            }
    
        default:
            return state
    }
}