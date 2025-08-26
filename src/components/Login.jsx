import React from 'react'

function Login({isAuthenticated,setIsAuthenticated}) {

    const handleAuth=()=>{
        
        setIsAuthenticated(!isAuthenticated);
        
    }
  return (
    <div>
        
   {isAuthenticated?"Logout":"Login"}
     <button onClick={handleAuth}>
        {isAuthenticated?"Log Out":"Log In"}
     </button>

    </div>
  )
}

export default Login