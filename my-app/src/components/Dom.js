import React, { Component } from 'react'
import css from './css/DataMount.module.css'
import DomChild from './DomChild'


export class Dom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: "Loading..."
         
      }
    }

    getData = () => {
       this.setState(
        prevState => {
            return{
                data: prevState.data === "Loading..." ? "Loaded!" : "Loading..."
            }
        }
       )
    }
    
  render() {
    return (
      <div className={css.DataMount}>
        {this.state.data}
        <button onClick={this.getData}>Get Data</button>
        <DomChild />
      </div>
      
      )
  }
}

export default Dom