import { Typography } from '@mui/material'
import React from 'react'
import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';




const Navbar = () => {




  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }


  return (
    <header>
    
      <nav>
        <div className='nav-container'>
        
          <div className='nav-header'>
            <Typography variant='h6' style={{ display: open ? 'none' : 'Block' }}>
              devaprem.
            </Typography>
          </div>


          <div className='nav-links'>
            <ul>
              <li><a href='#home'>home</a></li>
              <li><a href='#about'>about</a></li>
              <li><a href='#project'>projects</a></li>
              <li><a href='#contact'>contact</a></li>
            </ul>
            
          </div>
         
          
          <div className='menuicon'>
            <button onClick={toggle} style={{ display: open ? 'none' : 'Block', }} > <MenuIcon /></button>
          </div>
          
            
      
          <div className='menu-container' style={{ display: open ? "block" : "none", }}>
            <div className='closebtn'>
              <button onClick={toggle} style={{ display: open ? 'Block' : 'none', color: "white" }} > <CancelIcon /></button>
            </div>
            <div className='menu' >
              

              <ul>
                
                <li><a href='#home'>home</a></li>
                <li><a href='#about'>about</a></li>
                <li><a href='#project'>projects</a></li>
                <li><a href='#contact'>contact</a></li>
                   
              </ul>
                
            </div>
          </div>
           
           


        </div>
      </nav>
    

    </header>
    
  );
}

export default Navbar