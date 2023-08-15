import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = ({ data, setData, setSelected, addToCart, searchQuery }) => {
  const navigate = useNavigate();

  const filteredData = data.filter(
    (product) =>
      String(product.phone_name).toLowerCase().includes(searchQuery.toString().toLowerCase()) ||
      String(product.brand).toLowerCase().includes(searchQuery.toString().toLowerCase())
  );

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/phones/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setData((prevData) => prevData.filter((p) => p._id !== id));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className='products-list'>
        {filteredData.map((product) => (
          <div className='product-card' key={product._id}>
            <img
              className='img'
              src={product.img_url}
              alt='image'
              onClick={() => {
                setSelected(product);
                navigate('/ProductDetails');
              }}
            />
            <h2>{product.phone_name}</h2>
            <p>{`Released in ${product.release_year} by ${product.brand}`}</p>
            <p className='card-item-price'>Price: ${product.price}</p>
            <div className='product-card-buttons'>
              <button className='addCart' onClick={() => addToCart(product)}>Add to Cart</button>
              <button className='updateProd'
                onClick={() => {
                  setSelected(product);
                  navigate('/Update');
                }}
              >
                Update Product
              </button>
              <button className='deleteProd' onClick={() => handleDelete(product._id)}>Delete Product</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
