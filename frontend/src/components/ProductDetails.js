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
            <p className='prod-desc'>{`Equipped with ${selected.storage}GB of storage that can hold
            all your apps and media, ${selected.memory}GB of memory that enables blazing fast experience.
            The ${selected.phone_name} is also equipped with a ${selected.camera}MP camera to capture 
            the moments that matter the most. All this wrapped in a beautiful ${selected.screen_size} inch screen
            for the best viewing experience`}</p>
            <h2>Price: ${selected.price}</h2>
            <button onClick={()=>addToCart(selected)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;