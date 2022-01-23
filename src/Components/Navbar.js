import React ,{useState} from 'react'
import Hamburger from './Hamburger'




function Navbar() {
    const [status,Setstatus] = useState('close')
    const [ ok , setok  ] = useState(false)
   console.log(status);
 
      
       
        function handleclick() {
             setok(!ok)
            Setstatus(status === 'close' ?'open'  : 'close' )
        }

    return (
        <>
          <div className="main-header-component">
         <header className="primary-header" >
     <nav className = 'navbar'>   
        <div className="logo"> Tarun kumar </div>
          <div className="navlinks">
          <ul className = 'nav-list' >
                <li> 
                   <a href='#about' >    
                        About
                    </a>

                </li>
                <li> 
                    <a  href='#projects'>   
                       Projects
                    </a>
                </li>
                <li>
                      <a  href='#contact'> 
                            contact
                       </a>
                 </li>
              </ul>
          </div>
                <div className = 'hamburger-icon' >
                 <Hamburger status = {status}  Setstatus = {Setstatus}  setok  = {setok } ok ={ok} />
                   </div> 
          <div 
          className = 'hamburger-menu'
           id = {ok ? 'button-open': '' } >
             
        <div className = 'hamburger-menu-content'  >
        <ul>
                <li onClick = {handleclick}   > 
                   <a href='#about' >    
                        About
                    </a>

                </li>
                <li  onClick = {handleclick}  > 
                    <a  href='#projects'>   
                       Projects
                    </a>
                </li>
                <li  onClick = {handleclick} 
                 >
                      <a  href='#contact'> 
                            contact
                       </a>
                 </li>
              </ul>
        </div>
          
          </div>
          </nav>
    </header>    
    </div>
        </>
    )
}



export default Navbar
