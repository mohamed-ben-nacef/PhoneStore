import React, { useEffect, useState } from 'react';


const CartList = ({cart, deleteCart}) =>{
  console.log(cart);  
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    var theTotal=0;
    cart.map((e)=>{
      theTotal+=e.price
    })
    setTotal(theTotal)
  },[total])

  const checkout = () =>{
    if(cart){
      cart = [];
      setTotal(0);
      alert('Thank you for your purchase');
    } else {
      alert('Your shopping cart is empty');
    }
  }
  return (
    <div className="cart-list">
      <h1>Your cart</h1>
      {cart && cart.map((e,i)=>{
        return (
          <div className="cart-item" key={i}>
            <img className='img' src={e.img_url} alt='image'/>
            <span>Product Name: {e.phone_name}</span>
            <span>Price: ${e.price}</span>
            <button className="cart-list-button" onClick={()=>deleteCart(e)}>Remove</button>
          </div>
        )
      })}
      <h3>Total: ${total}</h3>
      <button className='checkout' onClick={checkout}>checkout</button>
    </div>
  );
}

export default CartList;