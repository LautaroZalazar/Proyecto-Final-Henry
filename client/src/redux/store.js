import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productoscreados from './reducers/createProductR';
import PerfilDelUsuarioR from './reducers/PerfilDelUsuarioR';

const reducer = combineReducers({
    productoscreados, PerfilDelUsuarioR
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
