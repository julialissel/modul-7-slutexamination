import arrow_up from '../assets/graphics/arrow-up.svg';
import arrow_down from '../assets/graphics/arrow-down.svg';
import { menuChoise } from '../actions/menuActions';
import { useDispatch} from 'react-redux';

function CartList({data}){
    const dispatchD = useDispatch();
    function increase(){
        
        
        
        
    }
    function decrese(){
        
        
        
        
    }
    return(
        <li className="cart-item">
            <h3>{data.item.title}</h3>
            <span className="dot"></span>
            <div className='quantity'>
                <button onClick={increase} className='arrow upp'><img src={arrow_up} /></button>
                <span>{data.quantity}</span>
                <button className='arrow down'><img src={arrow_down} /></button>
            </div>
            
            <span className="cart-item-price">{data.item.price} kr</span>
        </li>
    )
}
export default CartList;