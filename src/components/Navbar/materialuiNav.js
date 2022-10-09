// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { width } from '@mui/system';






// const Navbar = () => {
    
//         const [anchorElNav, setAnchorElNav] = React.useState(null);
        
      
//         const handleOpenNavMenu = (event) => {
//           setAnchorElNav(event.currentTarget);
//         };
      
//         const handleCloseNavMenu = () => {
//           setAnchorElNav(null);
//         };
      
      
//         return (
           
          
          
//           <AppBar className='navcontainer'  position="sticky" sx={{
//                 border: "none",
//                 backgroundColor: "transparent",
//                boxShadow: "none",
//                 height: 80,
        
            
//             }}>
            
//               <Toolbar disableGutters>
                
//                 <Typography
//                   noWrap
//                   component="a"
//                   href="/"
//                   sx={{
//                     mr: 2,
//                     display: { xs: 'none', md: 'flex' },
//                     fontWeight: 600,
//                     color: 'black',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   devaprem.
//                 </Typography>
      
//                 <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                   <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     onClick={handleOpenNavMenu}
//                     color="inherit"
//                   >
//                     <MenuIcon sx={{color: 'black'}} />
//                   </IconButton>
                  
                
                
                
                
//                 <Menu
//                   id="menu-appbar"
                 
//                     anchorEl={anchorElNav}
//                     anchorOrigin={{
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                       vertical: 'top',
//                       horizontal: 'left',
//                     }}
//                     open={Boolean(anchorElNav)}
//                     onClose={handleCloseNavMenu}
//                     sx={{
//                       display: { xs: 'block', md: 'none'},
//                     }}
//                   >
                    
//                       <MenuItem key={1} onClick={handleCloseNavMenu}>
//                             <Typography
//                                 sx={{ my: 2, display: 'block', fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                           textAlign="center">
//                           <a style={{textDecoration:"none",color:"black"}} href='#intro'>home</a>
//                           </Typography>
//                       </MenuItem>
//                       <MenuItem key={2} onClick={handleCloseNavMenu}>
//                             <Typography
//                                 sx={{ my: 2, display: 'block', fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                           textAlign="center">
//                           <a style={{textDecoration:"none",color:"black"}} href='#project'>project</a>
//                           </Typography>
//                       </MenuItem>
//                       <MenuItem key={3} onClick={handleCloseNavMenu}>
//                             <Typography
//                                 sx={{ my: 2, display: 'block', fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                           textAlign="center">
//                           <a style={{textDecoration:"none",color:"black"}} href='#about'>about</a>
//                           </Typography>
//                       </MenuItem>
//                       <MenuItem key={4} onClick={handleCloseNavMenu}>
//                             <Typography
//                                 sx={{ my: 2, display: 'block', fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                           textAlign="center">
//                           <a style={{textDecoration:"none",color:"black"}} href='#contact'>contact</a>
//                           </Typography>
//                       </MenuItem>
                    
                  


//                   </Menu>
//                 </Box>
                
//                 <Typography
//                   variant="h5"
//                   noWrap
//                   component="a"
//                   href=""
//                   sx={{
//                     mr: 2,
//                     display: { xs: 'flex', md: 'none' },
//                     flexGrow: 1,
//                     fontFamily: 'monospace',
//                     fontWeight: 700,
//                     letterSpacing: '.3rem',
//                     color: 'black',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   DEV
//                 </Typography>
//                         <Box
                        
//                              className='links-container'
//                             display="flex"
//                             justifyContent="flex-end"
//                             alignItems="flex-end"
//                             sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } }}>
                            
                 
                
                
//                       <Button 
//                       key={1}
//                       onClick={handleCloseNavMenu}
//                       sx={{ my: 2, color: 'black', display: 'block',fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600,}}
//                     >
//                       <a style={{textDecoration:"none",color:"black", width:500 }} href='intro'>home</a>
//                     </Button>
//                       <Button 
//                       key={2}
//                       onClick={handleCloseNavMenu}
//                       sx={{ my: 2, color: 'black', display: 'block',fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                     >
//                       <a style={{textDecoration:"none",color:"black"}} href='#project'>project</a>
//                     </Button>
//                       <Button 
//                       key={3}
//                       onClick={handleCloseNavMenu}
//                       sx={{ my: 2, color: 'black', display: 'block',fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                     >
//                       <a style={{textDecoration:"none",color:"black"}} href='#about'>about</a>
//                     </Button>
//                       <Button 
//                       key={4}
//                       onClick={handleCloseNavMenu}
//                       sx={{ my: 2, color: 'black', display: 'block',fontFamily:'inherit',textTransform:"capitalize", fontWeight: 600, }}
//                     >
//                       <a style={{textDecoration:"none",color:"black"}} href='#contact'>contact</a>
//                     </Button>
                 
//                 </Box>
      
//                 <Box sx={{ flexGrow: 0 }}>
                  
//                     <IconButton  sx={{ p: 2 }}>
//                       <Avatar alt="deva" src="src/images" />
//                     </IconButton>
                  
                 
//                 </Box>
//               </Toolbar>
            
//           </AppBar>
         
//         );
//       };



  


// export default Navbar