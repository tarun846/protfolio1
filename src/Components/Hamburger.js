import React, { useState } from 'react'

function Hamburger({setok,ok,status,Setstatus}) {
  function handleclick() {
      setok(!ok)
      Setstatus(status === 'open' ?  'close': 'open' )
  }
    return (
        <div className = 'Burger_menu-container' 
        role = 'button'
         onClick ={handleclick}
        >
            <div className = 'burger_menu-content'>
            <i className = {status} >  </i>
            <i className = {status} >  </i>
            <i className = {status} >  </i>
            </div>
        </div>
    )
}

export default Hamburger
