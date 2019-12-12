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
} from '../actions/actions-types/cart-actions'

const initState = {
    items: [],
    loading: false,
    error: null,
    addedItems: [],
    total: 0,
    rerender: true
}

const cartReducer = (state = initState, action) => {

    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };
        case FETCH_PRODUCTS_FAILURE:
                // The request failed. It's done. So set loading to "false".
                // Save the error, so we can display it somewhere.
                // Since it failed, we don't have items to display anymore, so set `items` empty.
                //
                // This is all up to you and your app though:
                // maybe you want to keep the items around!
                // Do whatever seems right for your use case.
                return {
                  ...state,
                  loading: false,
                  error: action.payload.error,
                  items: []
                };
        case ADD_TO_CART:
                console.log('ADD_TO_CART');
                let addedItem = state.items.find(item=> item.id === action.id)
                //check if the action id exists in the addedItems
                let existed_item = state.addedItems.find(item=> action.id === item.id)
                if(existed_item)
                {
                    addedItem.quantity += 1;
                    console.log('existed_item.state.total',state.total);
                    console.log('existed_item.addedItem.quantity',addedItem.quantity);
                    console.log('existed_item.addedItem.price',addedItem.price);
                    console.log('existed_item.total',state.total + addedItem.price);
                    return{
                        ...state,
                        total: state.total + addedItem.price,
                        loading: false,
                        error: null
                    }
                }
                else{
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + addedItem.price 
                    console.log('addedItem.addedItem.quantity',addedItem.quantity);
                    console.log('addedItem.newTotal',newTotal);
                    console.log('addedItem.addedItems',[...state.addedItems, addedItem]);
                    return{
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal,
                        loading: false,
                        error: null
                    }
                    
                }
        case ADD_QUANTITY:
            let addedQtyItem = state.items.find(item=> item.id === action.id)
            addedQtyItem.quantity += 1 
            let newTotal = state.total + addedQtyItem.price
            return{
                ...state,
                total: newTotal
            }
        case SUB_QUANTITY:
            console.log('SUB_QUANTITY');
            let sunQtyItem = state.addedItems.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(sunQtyItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - sunQtyItem.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                sunQtyItem.quantity -= 1
                let newTotal = state.total - sunQtyItem.price
                return{
                    ...state,
                    total: newTotal
                }
            }
        case REMOVE_ITEM:
                let itemToRemove= state.addedItems.find(item=> action.id === item.id)
                let new_items = state.addedItems.filter(item=> action.id !== item.id)
                
                //calculating the total
                let newTotalRem = state.total - (itemToRemove.price * itemToRemove.quantity )
                console.log(itemToRemove)
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotalRem,
                    loading: false,
                    error: null
                }
        case PRICE_HIGH:
            console.log('PRICE_HIGH');
            let sortedH2LItems = state.items.sort((a,b)=>{return b.price-a.price});
            return{
                ...state,
                items: sortedH2LItems
            }
        case PRICE_LOW:
            console.log('PRICE_LOW');
            let sortedL2HItems = state.items.sort((a,b)=>{return a.price-b.price});
            return{
                ...state,
                items: sortedL2HItems
            }
        case DISCOUNT:
            console.log('DISCOUNT');
            let sortDiscount = state.items.sort((a,b)=>{return b.discount-a.discount});
            return{
                ...state,
                items: sortDiscount
            }
        default:
            // ALWAYS have a default case in a reducer
            return state
    }
}

export default cartReducer