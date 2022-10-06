import { Typography } from '@mui/material';
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LinksContainer = styled.div`
  margin:50px 0;
  
  @media (max-width: 768px){
    margin:0; 
  }

`;
const SocialLinks = () => {


    return (
        

        <LinksContainer>
        <nav>
            <ul>
                <Typography variant="h6" gutterBottom  >
                    <div style={{ display: "flex" }}>
                        
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}>
                            <li style={{ listStyleType:"none", marginRight: 25 , }}><a style={{color:"black" ,textDecoration:"none"}} href='/' alt="github">Github</a></li>
                        </motion.div>
                        
                        <motion.div
                            
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2, }}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType: "none", marginRight: 25 ,}}><a style={{color:"black" ,textDecoration:"none"}}href='/' alt="LinkedIn">LinkedIn</a></li></motion.div>
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType: "none", marginRight: 25 ,}}  ><a style={{color:"black" ,textDecoration:"none"}}href='/' alt="twitter">Twitter</a></li></motion.div>
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType:"none", marginRight: 25 , }}><a style={{color:"black" ,textDecoration:"none"}}href='/' alt="Email">Email</a></li></motion.div>
                    </div>            
                </Typography>
            </ul>
        </nav>
            
        </LinksContainer>
        
        
    );
}

export default SocialLinks