const initialState = {
    order: []
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
        // console.log(updatedOrder)
        // console.log(updatedItemIndex)
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
        default:
            return state;
    }
}
export default menuReducers;