import { SEARCH } from "../actions/actionTypes";

const initState =         [{imgUrl:"https://images-na.ssl-images-amazon.com/images/I/416Ecx-WB2L._AC_SY580_.jpg", name:"hoodie", price:"55",id:"1"},
{imgUrl:"https://i.pinimg.com/originals/bd/90/d5/bd90d5017dcd0c1924fe63cb32b472bb.jpg", name:"stickers", price:"15",id:"2"} ,
{imgUrl:"http://cdn.shopify.com/s/files/1/1982/7331/products/01_02_1200x1200.jpg?v=1641882818", name:"tie dye", price:"35",id:"3"}]

export const searchReducer = (state = initState , action) => {
    switch(action.type){
        case SEARCH: {
            return state.filter(elt => (elt.name==action.name || elt.price==action.price || elt.imgUrl==action.imgUrl))
        }
        default: return state
    }
}

//how to keep the list const to search twice