import { useNavigate } from 'react-router-dom';

const Home = ({ data, setSelected, addCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addCart(product);
  };

  return (
    <div>
      <div className="products-list">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="img"
              src={product.img_url}
              alt="image"
              onClick={() => {
                setSelected(product);
                navigate('/product-details');
              }}
            />
            <h2>{product.phone_name}</h2>
            <p>{`Released in ${product.release_year} by ${product.brand}`}</p>
            <p className="card-item-price">Price: ${product.price}</p>
            <div className="product-card-buttons">
              <button>Update Product</button>
              <button>Delete Product</button>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;