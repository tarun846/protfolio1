import React,{useState} from 'react';
import Marquee from './Marquee';
import Kccordion from './Accordion';

function About() {
    
    const [click, setclick] = useState(null);
    const [kstyles, setStyles] = useState(true)
    console.log(click);
    function toggle(i) {
      // console.log(click);
      console.log(i);
      if (click === i ) {
         return setclick(null)
      }
        setclick(i)
        setStyles(!kstyles)
      // console.log(i);
    }

    const Accordioncontent = [
        {
           id : 1,
           title : ' ui ux',
           text : " Simulating and Constructing the digital structure that illustrates the experience of your Customer and resonates with it optimizing stucture and flow so that it gives a smooth and flaw less user experience     "   
        },
        {
            id : 2 ,
            title : 'web Design',
            text : 'Your website is the frontpage of your business. It is crucial that your website tells the right story while simultaneously focusing on the usability and customer experience. I take on the design by communicating your brand identity and values to the user. '
        },{
            id : 3,
             title : 'Web development',
             text : 'Using modern tools and languages like React, I meticulously code out your design with present-day security standards and core concepts of the web. I also go through the painstaking of wiring your website to the world wide web.'
        }
    ]
     
    const accordion = Accordioncontent.map((accordiondata,i)=>{
        console.log(i,'ac')
        return (    
            <Kccordion key = {accordiondata.id} clicks = {click}  index ={i} toggle={toggle}  kstyles = {setStyles}  setStyles={setStyles}  {...accordiondata} /> 
        
        ) 
          
    })

    return (
        <div id = 'about' className = 'about' style={{paddingLeft:0,paddingRight:0}} >
    <div className="about-left">
    <Marquee item = {'Services'}  />
    
    <div className = 'about-services'>
      
  {accordion}

    </div>
    
    </div>

    <div className="about-right">
    <Marquee item = {'About'}  />
    <p className = "about-IntroShort">I’m a designer and developer based in Puri ,Odisha.Currently working on side projects and updating my portfolio. I believe great design is defined by the experience it creates for the user, combined with a flawless execution.</p>
    <p className = "about-IntroLong">I've always had a natural curiosity for the unknown and have always strived to educate myself on how things work and why they do. At a young age I taught myself how to code and never had a reason to stop. I love everything to do with development &amp; visual design as well as delivering extraordinarily creative solutions across digital platforms and beyond.</p>
    </div>
        </div>
    )
}

export default About
