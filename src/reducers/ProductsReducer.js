import { ADD_PRODUCT, REMOVE_PRODUCT, REGISTER_PRODUCT, CLEAN_PRODUCTS } from "../types/ProductTypes";

const INITIAL_STATE = {
    current: [],
    possible: []
};

export default (state = INITIAL_STATE, action) => {
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
            if(possible.filter(prod => prod.name === action.payload.product.name).length == 0 && current.filter(prod => prod.name === action.payload.product.name).length == 0) {
                possible.push(action.payload.product);
                possible.sort(arraySort)
            }
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
