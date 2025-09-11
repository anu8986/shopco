import React from 'react'
import Newlayout from '../components/Newlayout'
import Button from '@mui/material/Button'
import SimpleSlider from './Brands'
import Newarraivels from './Newarraivels'

const Home = () => {


    return (
        <Newlayout>
            <div className='maincontianer-home'>
                <div className='homecontainer' >
                    <div className=' homesubcontainer-1 '>
                        <p className='homesubcontainer-para'>FIND CLOTHES  <br /> THAT MATCHES  <br /> YOUR STYLE</p>
                        <p>Browse through our diverse range of meticulously crafted garments, designed <br />to bring out your individuality and cater to your sense of style.</p>
                        <Button variant="outlined" >Shop Now</Button>
                        <div className='client-brands'>
                            <div className='brands-one'>
                                <p className='fs-2 fw-bold'>200+</p>
                                <p className='text-secondary'>International Brands</p>
                            </div>
                            <div className='brands-one'>
                                <p className='fs-2 fw-bold'>2000+</p>
                                <p className='text-secondary'>High-Quality Products</p>
                            </div>
                            <div className='brands-one'>
                                <p className='fs-2 fw-bold'>30,000+</p>
                                <p className='text-secondary'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <SimpleSlider />
                <Newarraivels />
            </div>
        </Newlayout>
    )
}

export default Home