import * as Type from './type';

const initialState = {
    blogs: null,
};

const blogReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_BLOGS:
            return {...state, blogs: payload}
        default:
            return state;    
    }
};

export default blogReducer;