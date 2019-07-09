import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

export const actFectchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('product','GET',null).then(res=>{
            dispatch(actFectchProducts(res.data));
        });
    };
}
export const actFectchProducts=(products)=>{
    return{
        type:Types.FETCH_PRODUCTS,
        products
    }
}