const initialState = {
    order: [],
    orderStatus: null,
    fetching: false
}
const updateCart = (state, action) => {
    const updatedOrder = [...state.order];
    let updatedItemIndex;
    
    let updatedItem = state.order.find((item,index) => {
        
        if(item.item.id == action.payload.id){
            updatedItemIndex = index;
            
            return true
        } 
    })
    
    if(updatedItem){
       
        updatedOrder[updatedItemIndex].quantity = updatedOrder[updatedItemIndex].quantity + 1 
       
    }else{
        
        const updatedItemObject = {
            item: action.payload,
            quantity: 1
        }
        updatedOrder.push(updatedItemObject);
    }
    return updatedOrder
}
const menuReducers = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_CHOICES':
            return {
                ...state,
                order: updateCart(state,action)
            }
        case 'ORDER_STATUS':
                return {
                    ...state,
                    orderStatus: action.payload
                }
        case 'REMOVE_CHOICES':
                return {
                    ...state,
                    orderStatus: null,
                    order: []
                }
        case 'CHECK_FETCHING':
                    return {
                        ...state,
                        fetching:  action.payload
                    }
        default:
            return state;
    }
}
export default menuReducers;