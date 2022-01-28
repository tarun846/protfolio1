                                                                                                                                                                                                                                                           import React from 'react'
import Marquee from './Marquee'
import  project1 from '../Assets/Projects/Bookapp.png'  ;
import  project2 from '../Assets/Projects/whatsapp.jpg'  ;
import  project3 from '../Assets/Projects/foundry.png'  ;
import  project4 from '../Assets/Projects/hackersent.png'  ;
import ProjectsContent from './ProjectsContent';


function Projects() {
    const Projectscontent = [
        {
           id : 1,
           img :project1,
           title : ' BooksClub  ',
           text : "  this project was great fun in this project i have used rest api to fetch data and implemented a search functionality  in  this project i have used react and scss "   
        },
        {
            id : 2 ,
            img :project2,
            title : 'WhatsApp',
            text : ' complete  Whatsapp clone firebase as backend it is a clone  with  complete whatshapp functionality like  creating  rooms ,   image upload , chatting , personalchat , and voice recording'
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
