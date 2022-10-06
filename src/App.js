import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import SocialLinks from './components/SocialLinks'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Container } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import "./style.css";
import Scroll from './components/Scrolls';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <Container maxWidth="xl">
       
      <ThemeProvider theme={theme}>

        <div id="navbar"><Navbar /></div>
        <div id="intro"><Intro /></div>
        <div id="sociallinks"><SocialLinks /></div>
        <div id="about"><About /></div>
        <div id="project"><Project /></div>
        <div id="contact"><Contact /></div>
        <div id="sociallinks"><SocialLinks /></div>
        <div id="footer"><Footer /></div>
        <div id="scroll"><Scroll /></div>
      
      </ThemeProvider>
      
    </Container>

    
  );
}

export default App