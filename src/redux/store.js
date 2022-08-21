import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "../features/product_details/redux/productReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const store = createStore(combineReducers({
        product: productReducer
    }),
    {}, applyMiddleware(thunk, logger)
);

export default store;