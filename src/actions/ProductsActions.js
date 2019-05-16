import { ADD_PRODUCT, REGISTER_PRODUCT, REMOVE_PRODUCT, CLEAN_PRODUCTS } from "../types/ProductTypes";

const addProduct = productIndex => ({
    type: ADD_PRODUCT,
    payload: {productIndex}
});

const removeProduct = productIndex => ({
    type: REMOVE_PRODUCT,
    payload: {productIndex}
});

const registerProduct = product => ({
    type: REGISTER_PRODUCT,
    payload: {product}
});

const cleanProducts = () => ({
    type: CLEAN_PRODUCTS
});

export {
    addProduct,
    removeProduct,
    registerProduct,
    cleanProducts
}