import React from 'react'

function Login({isAuthenticated,setIsAuthenticated}) {

    const handleAuth=()=>{
        
        setIsAuthenticated(!isAuthenticated);
        
    }
  return (
    <div>
        
   {isAuthenticated?"Logout":"Login"}
     <button onClick={handleAuth}>
        {isAuthenticated?"Logout":"Login"}
     </button>

    </div>
  )
}

export default Login