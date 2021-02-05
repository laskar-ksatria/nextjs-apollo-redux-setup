import * as Type from './type';

const initialState = {
    home_product: null,
    home_message: "From initialstate"
};

const reducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_HOME_PRODUCTS:
            return {...state, home_product: payload};
        default:
            return state;
    }
};

export default reducer;