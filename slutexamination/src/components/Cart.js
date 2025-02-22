
import './Cart.scss';
import { Link} from "react-router-dom";
import {useSelector} from 'react-redux';

import CartList from './CartList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { orderStatus } from '../actions/menuActions';
import { checkFetching } from '../actions/menuActions';

function Cart(){
    const choies = useSelector((state) => {return state.order});
  
    const dispatch = useDispatch();
    // console.log(choies);
    // const totalPrice = choies.reduce((totalSum, product)=>{
    //     console.log(product.quantity);
    //     let price =product.item.price
    //     if(product.quantity > 1){
    //         totalSum = price *  product.quantity
    //     }
    //     return totalSum += price
    //     },0)
   
        let totalPrice = choies.reduce((totalSum, product) => {
            let price = product.item.price;
            return (totalSum += price * (product?.quantity || 1));
          }, 0);
        // const kampanj = choies.find((item,index) => {
        //     console.log(item.item.id)
        //     let newArr = [];
        //     newArr.push(item.item.id)
        //     // console.log(newArr)
        //     if(item.item.id === 1 && item.item.id === 7){
        //         console.log('WINNWE');
        //     } 
        // })
        var newArray = choies.map(function(singleElement){
            return singleElement.item.id;
        })
        
        
        //Här blir det även sant även om flera utöver 1 och 7
        const res = newArray.includes(1) && newArray.includes(7) ;
        console.log(res)
        if(res){
            totalPrice = 40
        }

        console.log(res);   
        // console.log(choies);
    async function sendData(){
        dispatch(checkFetching(true))
        const respons = await fetch('http://localhost:5001/api/beans/', {
            method: 'POST',
            body: JSON.stringify(choies)
          });
          const content = await respons.json();

          
          dispatch(orderStatus(content))
         
          
    
    }
    
    return(
        <div className='cart-container'>
            
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
                    
                    <span className='total-price'>{ totalPrice } kr</span>
                    <span className='ink'>inkl moms + drönarleverans</span>
                </div>
                <a className='btn' onClick={sendData}>Take my money!</a>
                
            </article>
            
        </div>
    )
}
export default Cart;