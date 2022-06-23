import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productoscreados from './reducers/createProductR';
import PerfilDelUsuarioR from './reducers/PerfilDelUsuarioR';
import carrito from './reducers/carritoR';

const reducer = combineReducers({
    carrito,
    productoscreados, 
    PerfilDelUsuarioR
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
