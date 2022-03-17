import cartIcon from '../assets/graphics/bag.svg';
import './Cart.scss';
import { Link} from "react-router-dom";
import {useSelector} from 'react-redux';

import CartList from './CartList';

function Cart(){
    const choies = useSelector((state) => {return state.order});
    console.log('cart', choies);
    
    return(
        <div className='cart-container'>
            <div className="cart">
                <img src={ cartIcon } />
            </div>
            <article className='shoppingBag'>
                <h2>Din beställning</h2>
                <ul>
                    {
                        choies.map((item) =>{
                            return <CartList data={item} key={item.item.id}/>
                        })
                    }
                </ul>
                <div className='total-box'>
                    <h3>Totalt</h3>
                    <span className='total-price'>399 kr</span>
                    <span className='ink'>inkl moms + drönarleverans</span>
                </div>
                <Link
                    to={{
                        pathname: `/status/`
                    }}
                    className="btn"
                >
                    Take my money!
                </Link>
            </article>
            
        </div>
    )
}
export default Cart;