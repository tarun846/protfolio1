import React from 'react'
import Marquee from './Marquee'

function Contact() {
    return (
        <div   id = 'contact' className = 'contact' >
         <div className  = 'contact-left' >
        <h1> Thats enough of me <br/> Let's talk about you .</h1>      
        </div>                   
        <div className  = 'contact-right' >
        <Marquee item ={'contact'} />  
          <div className = 'contact-right-content' >
          <div> instagram  </div>
          <div> 
              <a  href = 'https://twitter.com/JJagannathBehe1' > Twitter   </a>
               </div>
             <div> 
                 <a href = ''  download >
                 Resume
                 </a>
                   </div>
             <div>
              <a href = 'https://www.linkedin.com/in/tarun-kumar-b606a1213/' >  
              Linkedin
              </a>
               </div>
          <div> <a href = ' https://github.com/tarun846' > Github  </a> </div>
         
          </div>  
          <div className = 'contact-right-bottom'> 
          <Marquee item ={'SAYHI'} /> 
          <h1> 
          <a className= 'herolinks' href="mailto:jjagannathbehera50@gmail.com?subject=Let's make something cool" > dev@tarunkumar </a> 

          </h1>
           </div> 
        </div> 
        </div>
    )
}

export default Contact
