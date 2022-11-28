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
                            <li style={{ listStyleType:"none", marginRight: 25 , }}><a  target="_blank" rel="noopener noreferrer"  style={{color:"black" ,textDecoration:"none"}} href='https://github.com/Devaprem1996' alt="github">Github</a></li>
                        </motion.div>
                        
                        <motion.div
                            
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2, }}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType: "none", marginRight: 25 ,}}><a   target="_blank" rel="noopener noreferrer" style={{color:"black" ,textDecoration:"none"}}href='https://www.linkedin.com/in/deva-prem-967a8b252/' alt="LinkedIn">LinkedIn</a></li></motion.div>
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType: "none", marginRight: 25 ,}}  ><a   target="_blank" rel="noopener noreferrer" style={{color:"black" ,textDecoration:"none"}}href='https://app.netlify.com/teams/devaprem1996/overview' alt="twitter">Netlify</a></li></motion.div>
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType:"none", marginRight: 25 , }}><a   target="_blank" rel="noopener noreferrer" style={{color:"black" ,textDecoration:"none"}}href='mailto:devaprem10@gmail.com' alt="Email">Email</a></li></motion.div>
                        <motion.div
                             
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.2,}}
                            whileTap={{
                                scale: 0.8,
                            }}><li style={{ listStyleType:"none", marginRight: 25 , }}><a   target="_blank" rel="noopener noreferrer" style={{color:"black" ,textDecoration:"none"}}href='https://drive.google.com/file/d/1Zbi6yi_n3uBnTXRjwertg6IJuKEK-HVA/view?usp=share_link' alt="Email">Resume</a></li></motion.div>
                    </div>            
                </Typography>
            </ul>
        </nav>
            
        </LinksContainer>
        
        
    );
}

export default SocialLinks