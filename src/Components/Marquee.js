import React from 'react'

function Marquee({item}) {
    return (
        <div className ='marriqe' >
            <div className = 'marriqe-content' > 
            <p className = 'marriqe-item' > {item} </p>
            <p className = 'marriqe-item' > {item} </p>
            <p className = 'marriqe-item' > {item} </p>
            <p className = 'marriqe-item' > {item} </p>
         
             </div>
        </div>

    )
}

export default Marquee
