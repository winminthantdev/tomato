import React from 'react'
import headerImg from '../../assets/frontend_assets/header_img.png';

import './Header.css'

const Header = () => {
  return (
    <div className='header' style={{
    backgroundImage: `url(${headerImg})`,
    backgroundRepeat: "no-repeat"
  }}>
      <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes carfted with finest ingredients and culinary expertise. Our missions is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
