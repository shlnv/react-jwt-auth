import getProductById from "../domain/use_case/getProductById";
import Product from "../data/model/Product";
import ProductInList from "../data/model/ProductInList";
import getRecommended from "../domain/use_case/getRecommended";

export const getProductAction = (id: string): any => {
    return (dispatch: Function) => {
        dispatch(productLoadAction());
        getProductById(id).then((data)=>{
                dispatch(productLoadedAction(data));
            }
        ).catch((error)=>{
            dispatch(productErrorAction(error.message));
        })
    }
};

export const TYPE_PRODUCT_LOAD = "TYPE_PRODUCT_LOAD";
export const TYPE_PRODUCT_LOADED = "TYPE_PRODUCT_LOADED";
export const TYPE_PRODUCT_ERROR = "TYPE_PRODUCT_ERROR";

export const productLoadAction = ()=>({
    type:TYPE_PRODUCT_LOAD
});

export const productLoadedAction = (data: Product)=>({
    type:TYPE_PRODUCT_LOADED,
    payload:data
});

export const productErrorAction = (message: string)=>({
    type:TYPE_PRODUCT_ERROR,
    payload:message
});

export const getRecommendedAction = (page: number):any => {
    return (dispatch: Function) => {
        dispatch(productRecommendedLoadAction());
        getRecommended(page).then((data)=>{
                dispatch(productRecommendedLoadedAction(data));
            }
        ).catch((error)=>{
            dispatch(productRecommendedErrorAction(error.message));
        })
    }
};

export const TYPE_PRODUCT_RECOMMENDED_LOAD = "TYPE_PRODUCT_RECOMMENDED_LOAD";
export const TYPE_PRODUCT_RECOMMENDED_LOADED = "TYPE_PRODUCT_RECOMMENDED_LOADED";
export const TYPE_PRODUCT_RECOMMENDED_ERROR = "TYPE_PRODUCT_RECOMMENDED_ERROR";

export const productRecommendedLoadAction = ()=>({
    type:TYPE_PRODUCT_RECOMMENDED_LOAD
});

export const productRecommendedLoadedAction = (data: Array<ProductInList>)=>({
    type:TYPE_PRODUCT_RECOMMENDED_LOADED,
    payload:data
});

export const productRecommendedErrorAction = (message: string)=>({
    type:TYPE_PRODUCT_RECOMMENDED_ERROR,
    payload:message
});