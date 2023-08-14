import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = (props) =>{
  const {data,addItem}=props
  
  return (
    <div>
      <div className="products-list">
        {data && data.map((e,i) => {  
            return (
              <div className="product-card" key={i}>
                <img className="img" src={e.img_url} alt="image" onClick={()=>{}} />
                <h2>{e.phone_name}</h2>
                <p>{`Released in ${e.release_year} by ${e.brand}`}</p>
                <p className="card-item-price">Price: ${e.price}</p>
                <div className="product-card-buttons">
                  <button>Update Product</button>
                  <button>Delete Product</button>
                  <button onClick={()=>addItem(e)}>Add to Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;