import { Data } from "../../components/data";
import { SEARCH } from "../actions/actionTypes";

const initState = [...Data]

export const searchReducer = (state = initState , action) => {
    switch(action.type){
        case SEARCH: {
            return state.filter(elt => (elt.name==action.name ))
        }
        default: return state
    }
}
// || elt.price==action.price || elt.imgUrl==action.imgUrl

//how to keep the list const to search twice