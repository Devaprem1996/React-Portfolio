import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './footer.css'

const Footer = () => {

  const date = new Date().getFullYear();
  return (
      <Box className="footerContianer" >
          <Typography   variant='subtile'>
        <span className='footercontent'> © devaprem. All right reserved {date} </span>
          </Typography>
    </Box>
  )
}

export default Footer