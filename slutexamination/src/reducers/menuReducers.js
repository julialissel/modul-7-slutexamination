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
const increaseQuant = (state, action) => {
    const updatedOrder = [...state.order];
    let getQuantity;
    let updatedItemIndex;
    // let indexID = state.order.findIndex(item => {
    //     return item.item.id = action.payload.item.id
    // })
    // console.log(indexID, 'rr');
    // console.log('pay',action.payload.item.id)
    // let number = action.payload.item.id -1;
    // console.log(updatedOrder[number])
    // updatedOrder[number*1].quantity = updatedOrder[number*1].quantity +1 
    // updatedOrder[updatedItemIndex].quantity = updatedOrder[updatedItemIndex].quantity + 1 
    // console.log('in',updatedOrder)
    // updatedOrder.map((item)=>{
    //     // console.log('ITEM', item.quantity)
    //     getQuantity = item.quantity
    //     let test = updatedOrder[getQuantity*1].quantity 
    //     test = updatedOrder[getQuantity*1].quantity +1 
    //     return test 
    // })
    const inQuant = updatedOrder.reduce((totalSum, item,index) => {
        let total =item.quantity
        console.log('QUANT',index)
        let newPrice = totalSum = total +1
        total = total + 1
        return total
       
      }, 0);
      console.log('ITEM',inQuant)
    
    return updatedOrder
}
const menuReducers = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_CHOICES':
            return {
                ...state,
                order: updateCart(state,action)
            }
        case 'INCREACE_QUANT':
                return {
                    ...state,
                    order: increaseQuant(state,action)
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