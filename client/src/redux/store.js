import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';
import products from './reducers/productsR';
import carritoR from './reducers/detailProductR';
import productName from './reducers/productNameR';
import productoscreados from './reducers/createProductR';
import PerfilDelUsuarioR from './reducers/PerfilDelUsuarioR';

const reducer = combineReducers({
    carrito,
    products,
    carritoR,
    productName,
    productoscreados, 
    PerfilDelUsuarioR
})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
