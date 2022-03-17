import './menu.scss';
import leaf_bottom from '../assets/graphics/graphics-footer.svg';
import leaf_top from '../assets/graphics/graphics-header.svg';

import { useState, useEffect } from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import { Link} from "react-router-dom";
import Cart from '../components/Cart';
// import { saveMenu } from '../actions/menuActions';
import MenuItem from '../components/MenuItem';

function Events(){
    // const dispatch = useDispatch();
    
    const [menuItems, setMenu] = useState([]);

    useEffect( () => {
        async function getMenu(){
            const respons = await fetch('http://localhost:5001/api/beans');
            const data = await respons.json();
    
            setMenu(data.menu);
           
        }
        getMenu();
    }, []);//körs enbart vid sidladdning 
   
    return (
        <section className="container menu">
            <Cart />
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