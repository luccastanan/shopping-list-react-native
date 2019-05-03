import { ADD_PRODUCT, REGISTER_PRODUCT, REMOVE_PRODUCT, CLEAN_PRODUCTS } from "../../types";

export const addProduct = productIndex => ({
    type: ADD_PRODUCT,
    payload: {productIndex}
});

export const removeProduct = productIndex => ({
    type: REMOVE_PRODUCT,
    payload: {productIndex}
});

export const registerProduct = product => ({
    type: REGISTER_PRODUCT,
    payload: {product}
});

export const cleanProducts = () => ({
    type: CLEAN_PRODUCTS
});