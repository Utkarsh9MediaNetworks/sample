import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_BEGIN,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    PRICE_HIGH,
    PRICE_LOW,
    DISCOUNT
} from './actions-types/cart-actions'

//fetch products action
export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

//fetch products sucess
export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
        products
    }
});

//fetch products failure
export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
        error
    }
});

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//fetch products action
export const sortPrizeHigh = () => ({
    type: PRICE_HIGH
});

//fetch products action
export const sortPrizeLow = () => ({
    type: PRICE_LOW
});

//fetch products action
export const sortDiscount = () => ({
    type: DISCOUNT
});


export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("https://api.myjson.com/bins/qzuzi")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            // console.log('fetchProducts',json);
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }