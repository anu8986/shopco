import React, { useEffect, useState } from 'react'
import Newlayout from '../components/Newlayout'
import { useSelector } from 'react-redux'

const Addtocarts = () => {
  const selector = useSelector((state) => state.product.product)
  const [addtocart,setaddTocart]=useState([])
  useEffect(()=>{
    setaddTocart((prev)=>[...prev,selector])
  },[selector])
  console.log(addtocart,'addtocart')
  console.log(selector.title , 'redux')
  return (
    <Newlayout>
      <section className='cards-container bg-primary'>
        <div className='showcard-container'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='showproduct-cards'>
              <img src={selector.image} alt="" className='showcard-img' />
            </div>

          </div>
          <div className=" my-5">
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-10 col-md-10 col-12">
                <div className="card shadow-lg border-0">
                  <div className="card-body p-4">
                    <h1 className="fs-2 display-5 fw-bold text-primary mb-3">
                      {selector.title}
                    </h1>

                    <div className="mb-3">
                      <span className="badge bg-secondary fs-6 px-3 py-2">
                        {selector.category}
                      </span>
                    </div>

                    <p className="card-text text-muted fs-5 mb-4 lh-base">
                      {selector.description}
                    </p>

                    <div className="d-flex align-items-center mb-4">
                      <span className="badge bg-warning text-dark fs-6 px-2">
                        {selector?.rating?.rate}/5
                      </span>
                    </div>

                    <div className="price-section">
                      <span className="h2 text-success fw-bold">
                        ${selector.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Newlayout>
  )
}

export default Addtocarts