import React from 'react'

function Playground({isAuthenticated,setIsAuthenticated}) {
  return (<>
    <div>Hi Welcome to Code PlayGround</div>
    <button onClick={()=>{
      setIsAuthenticated(!isAuthenticated);
      
    }}>Log Out</button>
    </>
  )
}

export default Playground