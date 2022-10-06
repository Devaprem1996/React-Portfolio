import React from 'react'
import './scroll.css'

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    
    const scrollHeight = window.scrollY; 
    if (scrollHeight > 500) {
        console.log("helo");
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


const Scroll = () => {
    return (
  
        <a className='top-link ' href="#navbar">&uarr; </a>
    
    );
}
export default Scroll;