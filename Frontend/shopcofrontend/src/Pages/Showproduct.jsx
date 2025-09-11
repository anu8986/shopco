import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Newlayout from '../components/Newlayout'
import { useParams } from 'react-router-dom'
import Profile from './Profile'

const Showproduct = () => {
    const { id } = useParams()
    const [signleProduct, setsingleProduct] = useState({})
    const [showModal, setShowModal] = useState(false);

    const handleaddtocart = () => {
        setShowModal(true);
    };

    const selector = useSelector((state) => state.product.product)

    const fetchingsingleproduct = async (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setsingleProduct(data))
            .catch((error) => console.log(error.message))
    }
    useEffect(() => {
        fetchingsingleproduct(id)
    }, [id])
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


    return (
        <Newlayout>
            <div className='p-6 '>
                <div className='showcard-container'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='showproduct-cards'>
                            <img src={signleProduct.image} alt="" className='showcard-img' />
                        </div>

                    </div>
                    <div className=" my-5">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-10 col-md-10 col-12">
                                <div className="card shadow-lg border-0">
                                    <div className="card-body p-4">
                                        <h1 className="fs-2 display-5 fw-bold text-primary mb-3">
                                            {signleProduct.title}
                                        </h1>

                                        <div className="mb-3">
                                            <span className="badge bg-secondary fs-6 px-3 py-2">
                                                {signleProduct.category}
                                            </span>
                                        </div>

                                        <p className="card-text text-muted fs-5 mb-4 lh-base">
                                            {signleProduct.description}
                                        </p>

                                        <div className="d-flex align-items-center mb-4">
                                            <div className="me-3">
                                                {renderStars(signleProduct?.rating?.rate)}
                                            </div>
                                            <span className="badge bg-warning text-dark fs-6 px-2">
                                                {signleProduct?.rating?.rate}/5
                                            </span>
                                        </div>

                                        <div className="price-section">
                                            <span className="h2 text-success fw-bold">
                                                ${signleProduct.price}
                                            </span>
                                        </div>

                                        {/* Optional: Add action buttons */}
                                        <div className="mt-4 d-flex gap-2 flex-wrap">
                                            <button className="btn btn-primary btn-lg px-4" onClick={handleaddtocart}>
                                                Add to Cart
                                            </button>
                                            <button className="btn btn-outline-secondary btn-lg px-4" onClick={() => setShowModal(true)}>
                                                Shop Now
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Popup Modal */}
                <div
                    className={`modal fade ${showModal ? 'show d-block' : ''}`}
                    tabIndex="-1"
                    style={{ backgroundColor: 'rgba(34, 34, 34, 0.5)' }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Shop Now</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>{signleProduct.title} has been process of ordering  to your cart!</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button className="btn btn-primary">Go to Cart</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </Newlayout>)
}

export default Showproduct