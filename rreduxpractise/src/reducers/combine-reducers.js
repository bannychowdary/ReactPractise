import { combineReducers } from "redux";
import productsData from "./reducer-products";
import friendsData from "./reducer-friends";
import oneUserClickedCapture from "./reducer-oneuserclicked";

const allReducers = combineReducers({
    products: productsData,
    friends: friendsData,
    clickedProduct:oneUserClickedCapture
})

export default allReducers