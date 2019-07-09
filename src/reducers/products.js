import * as Types from './../constants/ActionType';

var initialState=[];


const FETCH_PRODUCTScts  =(state=initialState,action)=>{
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            state=action.products;
        return [...state];
        default :
        return [...state];
    }
};

export default products;