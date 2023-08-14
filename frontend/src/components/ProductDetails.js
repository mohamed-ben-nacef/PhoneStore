import React from 'react';

const ProductDetails = ({ selected, addToCart }) => {
  return (
    <div>
      <div className="products-details">
        <div className="product-details">
          <div className="product-image">
            <img src={selected.img_url} alt={selected.phone_name} />
          </div>
          <div className="product-info">
            <h1>{selected.phone_name}</h1>
            <p>{`Released in ${selected.release_year} by ${selected.brand}`}</p>
            <p>{`${selected.storage}GB, ${selected.memory}GB, ${selected.camera}MP, ${selected.screen_size} inches`}</p>
            <h2>Price: ${selected.price}</h2>
            <button onClick={()=>addToCart(selected)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;