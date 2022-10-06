import React from 'react'
import {motion} from 'framer-motion'
import './contact.css'
const Form = () => {
    return (
        <form action="https://formsubmit.co/devaprem10@gmail.com" method="POST" >
    
            <div className='inputContainer'> 
                
            <div className='inputs'><input placeholder="Name" type="text" name="name" required /></div>    
                <div className='inputs'><input type="hidden" name="_template" value="table" /></div>
                <input type="hidden" name="_autoresponse" value="Thank you for your response" />    
                <div className='inputs'><input placeholder="Email" type="email" name="email" required /></div> 
                <div><input type="hidden" name="_captcha" value="false" /></div>
                <div><input type="hidden" name="_subject" value="New email from protfolio"/></div>
                <div><input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/></div>
            
            <div className='inputs'><textarea placeholder="Your Message" class="form-control" name="message" cols="40" rows="3" required></textarea></div>    
            <motion.div transition={{ type: "spring", stiffness: 100 }} whileHover={{ x: 50 }} whileTap={{ scale: 0.8, }} whileDrag={{ scale: 1.2 }} className="item" ><div className='inputs'><input type="submit" value="Submit" /></div></motion.div>    
            
            
            
            
            </div>
        
        </form>
    );
}

export default Form;