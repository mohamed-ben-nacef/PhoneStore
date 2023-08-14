import React, { useEffect, useState } from 'react';


const CartList = ({cart, deleteCart}) =>{
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    var theTotal=0;
    cart.map((e)=>{
      theTotal+=e.price
      setTotal(theTotal)
    })
  },[cart,total])
  return (
    <div className="cart-list">
      <h1>Your cart</h1>
      {cart && cart.map((e,i)=>{
        return (
          <div className="cart-item" key={i}>
            <span>Product Name: {e.phone_name}</span>
            <span>Price: ${e.price}</span>
            <button className="cart-list-button" onClick={()=>deleteCart(e)}>Remove</button>
          </div>
        )
      })}
      <h3>Total: ${total}</h3>
      <button>checkout</button>
    </div>
  );
}

export default CartList;