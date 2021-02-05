import * as Type from './type';

const initialState = {
    shop_product: null,
}

const shopReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_SHOP_PRODUCT:
            return {...state, shop_product: payload}
        default:
            return state;
    }
}

export default shopReducer;