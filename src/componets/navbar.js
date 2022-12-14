import React from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
               <div className='navlogo'>
                 <img src="./afs5.png"  alt=""  />
               </div>
               <div className='nav_searchbaar'>
                    <input type="text" name="" id="" />
                    <div className='search_icon'>
                        <SearchIcon id="search"/>
                    </div>
               </div>
                
            </div>
            <div className='right'>
                <div className='nav_btn'>
                    <a href="">Sign in</a>
                </div>
                <div className='cart_btn'>
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCartIcon id="icon" />
                    </Badge>
                    <p>Cart</p>
                </div>
               <Avatar className='avtar' /> 
            </div>
        </nav>
    </header>
  )
}

export default Navbaar