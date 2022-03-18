import './menu.scss';
import leaf_bottom from '../assets/graphics/graphics-footer.svg';
import leaf_top from '../assets/graphics/graphics-header.svg';

import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import Cart from '../components/Cart';
// import { saveMenu } from '../actions/menuActions';
import MenuItem from '../components/MenuItem';
import cartIcon from '../assets/graphics/bag.svg';
import Status from './Status';
import Loading from '../components/Loading';
import { checkFetching } from '../actions/menuActions';
function Events(){
    // const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [menuItems, setMenu] = useState([]);
    const [counter, setCount] = useState(0);
    const orderStatus = useSelector((state) => {return state.orderStatus});
    const menuData = useSelector((state) => {return state.order});
    const fetching = useSelector((state) => {return state.fetching});
    const dispatch = useDispatch();
    useEffect( () => {
        async function getMenu(){
            const respons = await fetch('http://localhost:5001/api/beans');
            const data = await respons.json();
    
            setMenu(data.menu);
           
        }
        getMenu();
    }, []);//körs enbart vid sidladdning
    let conter =  menuData.length;
    // console.log('order',menuData);
    useEffect( () => {
        
    }, [counter]);//körs enbart vid sidladdning

    const totalItems = menuData.reduce((totalSum, item)=>{
        
        let total =item.quantity
        return totalSum += total
        
        },0)
    console.log(fetching.fetching);
   function resetAll(){
       setVisible(false)
       dispatch(checkFetching(false))
   }
    return (
        <section className="container menu">
            <div className="cart" onClick={() => setVisible(!visible)}>
                <img src={ cartIcon } />
                <div className='nrItem'>{totalItems}</div>
            </div>
            { visible &&
                <Cart  />
            }
            {
                orderStatus &&
                <Status data={orderStatus} load={ resetAll } />
            }
            {
                fetching &&
                <Loading  />
            }
            
            <img className="leaf" src={leaf_top}/>
            <article className='menu-container'>
                <h1>Meny</h1>
                <ul className='menu-list'>
                    {menuItems.map((menuItem) =>{
                        return <MenuItem data={menuItem} key={menuItem.id}/>
                    })}
                </ul>
            </article>
            <img className="leaf" src={leaf_bottom}/>
        </section>
    )
}
export default Events;