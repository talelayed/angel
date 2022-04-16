import { ADDQTY, ADDTOCART, MAJTOTALCART, REMOVE } from "../actions/actionTypes";

const initState = {
    products:[
    {imgUrl:"https://images-na.ssl-images-amazon.com/images/I/416Ecx-WB2L._AC_SY580_.jpg", name:"hoodie", price:"55",id:"1"},
    {imgUrl:"https://i.pinimg.com/originals/bd/90/d5/bd90d5017dcd0c1924fe63cb32b472bb.jpg", name:"stickers", price:"15",id:"2"} ,
    {imgUrl:"http://cdn.shopify.com/s/files/1/1982/7331/products/01_02_1200x1200.jpg?v=1641882818", name:"tie dye shirt", price:"35",id:"3"},
    {imgUrl:"https://images.asos-media.com/products/asos-design-bob-effet-tie-dye/12204699-4?$n_640w$&wid=513&fit=constrain",name:"bob",price:"35",id:"4"},
    {imgUrl:"https://images.journeys.com/images/products/1_622006_ZM.JPG", name:"tie dye socks", price:"7",id:"5"},
    {imgUrl:"https://www.outside-shop.com/26555-large_default/rip-n-dip-luck-charms-long-sleeve-multi-tie-dye-wash.jpg", name:"tie dye sleeves", price:"65",id:"6"},
    {imgUrl:"https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw19e41dc9/images/hi-res/71306_1.jpg?sw=734&sh=734&sm=fit", name:"cute keychains", price:"8",id:"7"},
    {imgUrl:"https://www.ubuy.ci/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE4RkVONlNjWUwuX0FDX1VMMTAwMF8uanBn.jpg", name:"anime keychains", price:"8",id:"8"},
    {imgUrl:"https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202145/0036/friends-mug-collection-z.jpg", name:"friends mug", price:"18",id:"9"}],
    cart:[]
}

export const cartReducer = (state = initState ,action) => {
    switch (action.type) {
        case REMOVE:
            return{
                ...state,cart:state.cart.filter(elt=>elt.id !== action.payload.id)
            }
        case ADDTOCART:
            //the item to add
            const item = state.products.find(elt=>elt.id===action.payload.id)
            //if the product already exists
            const inCart = state.cart.find(elt=>elt.id===action.payload.id?true:false)
            //add the item
            return {...state,cart: inCart? state.cart.map(elt=>(elt.id===action.payload.id)?{
                ...elt,quantity:elt.quantity+1
            }: elt
            ): [...state.cart,{...item,quantity:1}]
            }
        case ADDQTY:
            return {
                ...state,cart:state.cart.map(elt=>(elt.id===action.payload.id)?{
                    ...elt,quantity:action.payload.quantity
                }:elt,)
            }
        default: return state
    }
} 