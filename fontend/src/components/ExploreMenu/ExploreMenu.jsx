import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id='explore-menu' className='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes carfted with finest ingredients and culinary expertise. Our missions is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

      <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                  return (
                        <div key={index} className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                              <img src={item.menu_image} className={category===item.menu_name?'active':''} alt="" />
                              <p>{item.menu_name}</p>
                        </div>
                  )
            })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
