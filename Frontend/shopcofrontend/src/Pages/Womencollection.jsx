import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Newlayout from '../components/Newlayout';
import { selectedmoreproduct } from '../redux/moreproduct';

const TotalPurchase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingdata = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/carts');
      const data = await response.json();

      // Transform the carts to include total quantity of products
      const transformedCarts = data.map(cart => {
        const totalQuantity = cart.products.reduce((sum, item) => sum + item.quantity, 0);
        return {
          ...cart,
          totalQuantity
        };
      });

      setCarts(transformedCarts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingdata();
  }, []);

  const handleshowproduct = (cart) => {
    dispatch(selectedmoreproduct(cart));
    navigate(`/Showproduct/${cart.id}`, { state: cart });
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
      <div className="new-arrivals-container">
        <div className="header">
          <h1> Total Purchase</h1>
        </div>

        <div className="products-grid">
          {carts.map((cart) => (
            <div key={cart.id} className="product-card">
              <div className="product-info">
                <h3 className="product-title">Cart ID: {cart.id}</h3>
                <p>User ID: {cart.userId}</p>
                <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
                <p>Total Products: {cart.products.length}</p>
                <p>Total Quantity: {cart.totalQuantity}</p>
                <Button
                  variant="outlined"
                  onClick={() => handleshowproduct(cart)}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Newlayout>
  );
};

export default TotalPurchase;
