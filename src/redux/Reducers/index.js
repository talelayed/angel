import { combineReducers } from "redux";
import { publishReducer } from "./publishReducer";
import { searchReducer } from "./searchReducer";
import {cartReducer } from "./cartReducer"
import totalCartReducer from "./totalCartReducer"


export const rootReducer = combineReducers({
    publishReducer,searchReducer,cartReducer,totalCartReducer
})