import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectedmoreproduct } from '../redux/moreproduct';
import { useNavigate } from 'react-router-dom';
import Newlayout from '../components/Newlayout';
const NewArrivals = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingdata = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const clothingProducts = data;
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const handleshowproduct = (products) => {
    dispatch(selectedmoreproduct(products))
    navigate(`/Showproduct/${products.id}`, { state: products })
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }


  return (
      <div className="new-arrivals-container">

        <div className="header">
          <h1>NEW ARRIVALS</h1>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="category-tag">
                {product.category.replace("'s", "")}
              </div>

              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>

                <div className="rating-container">
                  <div className="stars">
                    {renderStars(product.rating.rate)}
                  </div>
                  <span className="rating-text">
                    {product.rating.rate}/5
                  </span>
                </div>
                <Button variant="outlined" onClick={() => handleshowproduct(product)} >Shop Now</Button>

                <div className="price-container">
                  <span className="price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default NewArrivals;