import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"

const CartList = ({cart}) =>{
  const navigate=useNavigate();
  var [total, setTotal] = useState(0);
  useEffect(()=>{
    cart.map((e)=>{
      setTotal(total + e.price)
    })
  },[total])
  return (
    <div className="cart-list">
      <h1>Your cart</h1>
      {cart && cart.map((e,i)=>{
        return (
          <div className="cart-item" key={i}>
            <span>Product Name: {e.phone_name}</span>
            <span>Price: ${e.price}</span>
            <button className="cart-list-button">Remove</button>
          </div>
        )
      })}
      <h3>Total: ${total}</h3>
      <button>checkout</button>
    </div>
  );
}

export default CartList;