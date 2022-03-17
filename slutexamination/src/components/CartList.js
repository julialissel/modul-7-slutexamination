function CartList({data}){
    return(
        <li className="cart-item">
            <h3>{data.item.title}</h3>
            <span>{data.quantity}</span>
            <span className="cart-item-price">{data.item.price} kr</span>
        </li>
    )
}
export default CartList;