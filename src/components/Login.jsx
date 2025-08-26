import React from 'react'

function Login({isAuthenticated,setIsAuthenticated}) {

    const handlelogin=()=>{
        if(!isAuthenticated)
        setIsAuthenticated(true);
        
    }
  return (
    <div>
        Login
     <button onClick={handlelogin}>Login</button>

    </div>
  )
}

export default Login