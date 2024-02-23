import React from 'react'

function ButtonChanger(props) {
  return (
    <div>
        {props.isLoggedin ? <button onClick={props.clickHandler}>Log out</button> : <button onClick={props.clickHandler}>Log in</button>}
    </div>
  )
}

export default ButtonChanger