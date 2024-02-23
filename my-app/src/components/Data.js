import React from 'react'

function Data(props) {
  return (
    <div>
        <h1>{props.isLoggedin ? "Data Loaded" : "Loading..."} </h1>
    </div>
  )
}

export default Data