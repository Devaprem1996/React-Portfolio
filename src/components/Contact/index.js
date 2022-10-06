import { Grid, Typography,} from '@mui/material'
import {motion} from 'framer-motion'
import { Box } from '@mui/system'
import React from 'react'
import './contact.css'
import Form from './form'


const contact = () => {
    return (
        <Box classname="contactBox" my={8}>
            <Grid container>
              
                <Grid item lg={6} xs={12} md={6} sm={6}>
                    <div className='contactHeader'>
                        <Typography variant='h4' >
                            Contact.
                        </Typography>
                    </div>
                    <div classname="contactContent" >
                        <Typography variant='h1'>
                            <pre>LET'S WORK</pre>
                            <pre>TOGETHER</pre>
                            
                        </Typography>
                    </div>
                    <div className='contactBtn'>
                        
                        <motion.div transition={{ type: "spring", stiffness: 100 }} whileHover={{ x: 50 }} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }} className="item" >
                            
                            
                        <a href='mailto:devaprem10@gmail.com'><button> Send a mail</button></a></motion.div>
                    </div>
                   
                </Grid>
                <Grid item lg={6} xs={12} md={12} sm={12}>
                    
                    
                   
                    <div>
                        <Form/>
                   </div>
                   
                   
                </Grid>
        </Grid>
          
        </Box>
    );
}

export default contact