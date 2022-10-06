import React from 'react'

import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import './Intro.css'



export const Color = styled.p`
 display:inline;
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
 
`

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { opacity: 0 },
    visible: {

      opacity: 1
    }

    
}







const Intro = () => {


  return (
    <div className='Titlecontainer'>
      <Typography variant='h1' gutterBottom  >
        <motion.div className="introContainer" variants={container} initial="hidden" animate="visible">
          <motion.p transition={{ type: "spring", stiffness: 100 }} whileHover={{x: 50}} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }}className="item" variants={item}>
            <div>Hello ! </div>
          </motion.p>
          <motion.p transition={{ type: "spring", stiffness: 100 }} whileHover={{x: 50}} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }}className="item" variants={item}>
            <div>I'm devaprem - curious</div>
          </motion.p>
          <motion.p transition={{ type: "spring", stiffness: 100 }} whileHover={{x: 50}} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }}className="item" variants={item}>
            <div>Full Stack Web Developer</div>
          </motion.p>
          <motion.p transition={{ type: "spring", stiffness: 100 }} whileHover={{x: 50}} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }}className="item" variants={item}>
            <div style={{ color: "gray" }}>based in Chennai,
          <Color>India</Color>
            </div>
          </motion.p>
            
            
          
          
            
            
            
            
        </motion.div>
      </Typography>
    </div>          
    
);
}

export default Intro


                        
          


