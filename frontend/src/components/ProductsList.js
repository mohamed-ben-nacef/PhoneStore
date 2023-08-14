const ProductList = (props) =>{
  const {data}=props
  console.log(data);
  return (
    <div>
      <div className="products-list">
        {data && data.map((e,i) => {
          console.log(e.phone_name);
            return (
              <div className="product-card" key={i}>
                <img className="img" src={e.img_url} alt="image" onClick={()=>{}} />
                <h2>{e.phone_name}</h2>
                <p>{`Released in ${e.release_year} by ${e.brand}`}</p>
                <p className="card-item-price">Price: ${e.price}</p>
                <div className="product-card-buttons">
                  <button>Update Product</button>
                  <button>Delete Product</button>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;