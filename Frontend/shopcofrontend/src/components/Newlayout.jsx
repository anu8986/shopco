import React from 'react'
import Navbar from './Navbar'
import PrimarySearchAppBar from './Navbar'
import ResponsiveAppBar from './Navbar'

const Newlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Newlayout