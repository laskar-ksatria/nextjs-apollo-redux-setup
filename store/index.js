import { createStore, applyMiddleware, combineReducers } from 'redux';
import { useMemo } from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'

//importing reducers
import shopReducer from './shops/reducer';
import homeReducer from './home/reducer';
import blogsReducer from './blogs/reducer';

//Export allType;
export * from './home/type';
export * from './blogs/type';
export * from './shops/type';

let initialState = {}

const rootReducer = combineReducers({
  shopReducer, homeReducer, blogsReducer
})

function initStore(preloadedState = initialState) {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware())
    )
};

let store;

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)
    if (preloadedState && store) {
      _store = initStore({
        ...store.getState(),
        ...preloadedState,
      })
      store = undefined
    }
    if (typeof window === 'undefined') return _store
    if (!store) store = _store
    return _store
};
  
export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
};

