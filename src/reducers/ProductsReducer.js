import { combineReducers } from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAN_PRODUCTS, REGISTER_PRODUCT } from '../../types';
import { Product } from "../models";

const INITIAL_STATE = {
    current: [],
    possible: [
        new Product('Arroz'),
        new Product('Feijão'),
        new Product('Chocolate'),
        new Product('Coxinha'),
        new Product('Ração'),
        new Product('QBoa'),
        new Product('Frango'),
        new Product('Bolo'),
        new Product('Alface'),
        new Product('Tomate'),
        new Product('Nutella'),
        new Product('Água'),
        new Product('Halls'),
        new Product('Margarina'),
        new Product('Presunto'),
        new Product('Queijo'),
        new Product('Pasta de dente')
    ]
};

const productReducer = (state = INITIAL_STATE, action) => {
    let { current, possible } = state;

    const arraySort = (a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0

    switch (action.type) {
        case ADD_PRODUCT:
            const addedProduct = possible.splice(action.payload.productIndex, 1)[0];    
            current.push(addedProduct);
            return { current, possible };
        case REMOVE_PRODUCT:
            const removedProduct = current.splice(action.payload.productIndex, 1)[0];
            possible.push(removedProduct);
            possible.sort(arraySort)
            return { current, possible };
        case REGISTER_PRODUCT:
            possible.push(action.payload.product);
            possible.sort(arraySort)
            return {current ,possible}
        case CLEAN_PRODUCTS:
            possible.push(...current);
            current = [];
            return { current, possible };
        default:
            possible.sort(arraySort)
            return state;
    }
};

export default combineReducers({
    products: productReducer
});
