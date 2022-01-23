import React from 'react'
import Heroimg from '../Assets/Hero2.jpeg'
import scroll from '../Assets/scroll.svg';
function Hero() {
    return (
        <>
            <div className = 'hero' >
            
            <div className='hero-text-wrapper' >

            <div className = 'hero-text'> 
            <h5>Hey, i'm <span>Tarun</span>, ui developer </h5>
              
            <div className="gada">
               Hey,i'm <span className="hide">Tarun</span>,UI/UX designer and Software engineer ,focused on
             
              crafting polished user experiences.
              </div>
             
              <h5>and frontend developer,focused on</h5> 
             
              <h5>crafting polished user experiences.</h5>
          
            </div> 
          
            </div>
          
            <div className="hero-img" > 
          
          <img className = 'hero-picture' src={Heroimg} alt="Heroimg"/>
             
              </div>
             
             <div className = 'hero-link' > 

             <a className= 'herolinks' href="mailto:jjagannathbehera50@gmail.com?subject=Let's make something cool" >

                 dev@tarunkumar

            </a> 
            
             </div>

             </div>
          
             <div className = 'a' >  
               
                 <img className ='scroll' src={scroll} alt = 'scroll' />
            
             </div>
            
        </>
    )
}

export default Hero
