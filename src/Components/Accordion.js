import React,{useState} from 'react';

const Kccordion = ({title,text,clicks,index,toggle,kstyles}) => {

    
    // const [click, setclick] = useState(false)

    return (
       <div
       className =  'Accordion'    
       onClick = { () =>toggle(index)}
        >
        <div className ='accordion' >
            <span className = {  kstyles ?  'actual1'  :'Change'  } ></span>
            <span className = {  kstyles ?  'actual2'  : 'Change' } ></span>
         <h1> {title}  </h1>
        </div>

      <div  id = 'Accordion-text' className = {clicks === index ? ' AccordionChange' : 'accordion-content' } >  
      <p>  {text} </p>      
    </div>

        </div> 
    );
}

export default Kccordion;
