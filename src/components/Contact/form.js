import React from 'react'
import {motion} from 'framer-motion'
import './contact.css'
const Form = () => {
    return (
        <form action="https://formsubmit.co/devaprem10@gmail.com" method="POST" >
    
            <div className='inputContainer'> 
                
            <div className='inputs'><input placeholder="First Name" type="text" name="fname" required /></div>    
            <div className='inputs'><input placeholder="Last Name" type="text" name="lname" required /></div>    
                <div className='inputs'><input type="hidden" name="_template" value="table" /></div>
                <div className='inputs'><input placeholder="What's your email?" type="email" name="email" required /></div> 
                <div><input type="hidden" name="_captcha" value="false" /></div>
                <div><input type="hidden" name="_subject" value="New email from protfolio"/></div>
                
            
            <div className='inputs'><textarea placeholder="Your questions.." class="form-control" name="message" cols="41" rows="3" required></textarea></div>    
            <motion.div transition={{ type: "spring", stiffness: 100 }} whileHover={{ scale:0.8 }} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }} className="item" ><div className='inputs'><input type="submit" value="Submit" /></div></motion.div>    
            
            
            
            
            </div>
        
        </form>
    );
}

export default Form;