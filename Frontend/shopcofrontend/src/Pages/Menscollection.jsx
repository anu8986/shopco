import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectedmoreproduct } from '../redux/moreproduct';
import { useNavigate } from 'react-router-dom';
import Newlayout from '../components/Newlayout';
import Button from '@mui/material/Button';

const Menscollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchingdata = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.escuelajs.co/api/v1/products'); // your real API
      const data = await response.json();
      const clothingProducts = data.filter(
        (item) => item.category && item.category.name === 'Clothes'
      );
      setProducts(clothingProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingdata();
  }, []);

  const handleshowproduct = (product) => {
    dispatch(selectedmoreproduct(product));
    navigate(`/Showproduct/${product.id}`, { state: product });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <Newlayout>
      <div className="mens-collection-container">
        <h1>MEN'S COLLECTION</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="category-tag">{product.category.name}</div>

              <div className="product-image-container">
                <img
                  src={product.images[0]} // first image from array
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>

                <Button
                  variant="outlined"
                  onClick={() => handleshowproduct(product)}
                >
                  Shop Now
                </Button>

                <div className="price-container">
                  <span className="price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Newlayout>
  );
};

export default Menscollection;
