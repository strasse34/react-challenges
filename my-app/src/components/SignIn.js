import React from 'react'
import Data from './Data'

function SignIn(props) {

    
   
  return (
    <div>
        <Data isLoggedin={props.isLoggedin} />
        <p>
            {props.isLoggedin ? (
                "Welcome to this website"
            ) : (
                "Please log in"
            )}
        </p>
        
    </div>
  )
}

export default SignIn