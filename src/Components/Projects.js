                                                                                                                                                                                                                                                           import React from 'react'
import Marquee from './Marquee'
import  project1 from '../Assets/Projects/dynamoFencing.png'  ;
import  project2 from '../Assets/Projects/cheesyrat.png'  ;
import  project3 from '../Assets/Projects/foundry.png'  ;
import  project4 from '../Assets/Projects/hackersent.png'  ;
import ProjectsContent from './ProjectsContent';


function Projects() {
    const Projectscontent = [
        {
           id : 1,
           img :project1,
           title : ' BooksClub (Coming soon) ',
           text : " Simulating and Constructing the digital structure that illustrates the experience of your Customer and resonates with it optimizing stucture and flow so that it gives a smooth and flaw less user experience     "   
        },
        {
            id : 2 ,
            img :project2,
            title : 'Dev.to  (Coming soon)',
            text : 'Your website is the frontpage of your business. It is crucial that your website tells the right story while simultaneously focusing on the usability and customer experience. I take on the design by communicating your brand identity and values to the user. '
        },
        {
            id : 3,
            img :project3,
             title : ' Tiktok (Coming soon) ',
             text : 'Using modern tools and languages like React, I meticulously code out your design with present-day security standards and core concepts of the web. I also go through the painstaking of wiring your website to the world wide web.'
        },
        {
            id : 4,
            img :project4,
             title : ' Instagram  (Coming soon) ',
             text : 'Using modern tools and languages like React, I meticulously code out your design with present-day security standards and core concepts of the web. I also go through the painstaking of wiring your website to the world wide web.'
        }
    ]
    
    const project =  Projectscontent.map((data,i) =>{
    
        return  <ProjectsContent key = {data.id} data = {data} index = {i} />
    })

    return (
       

        <div id = 'projects' >
               <Marquee item = {'Projects'}  />
          <div className = 'projects'>
            {project}
         </div>
                 
        </div>
    )
}

export default Projects
