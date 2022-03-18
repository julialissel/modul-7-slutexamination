
export const menuChoise = (menu) =>{
    return{
        type: 'SAVE_CHOICES',
        payload: menu
    }
}
export const orderStatus = (orderStatus) =>{
    return{
        type: 'ORDER_STATUS',
        payload: orderStatus
    }
}
export const removeOrder = (orderStatus) =>{
    return{
        type: 'REMOVE_CHOICES',
        payload: orderStatus
    }
}
export const checkFetching = (fetching) =>{
    return{
        type: 'CHECK_FETCHING',
        payload: fetching
    }
}
export const increaseQuant = (quant) =>{
    return{
        type: 'INCREACE_QUANT',
        payload: quant
    }
}