import React from 'react';

const ProjectsContent = ({data}) => {

    const {img,text,title} = data

    return (
        <div className = 'projectsContent' >
            <img src ={img} className = 'projectsimage' alt = {img} />
           
            <div className = 'ProjectCaption' > 
              <h1> {title} </h1>
             <p> {text} </p> 
             </div>
           
        </div>
    );
}

export default ProjectsContent;
