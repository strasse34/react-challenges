import React from 'react'

function EventsFunctional() {

    function clickHandler(){
        console.log('Clicked the functional button')
    }

  return (
    <button onClick={clickHandler}>Click me - Functinal</button>
  )
}

export default EventsFunctional