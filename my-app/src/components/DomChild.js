import React, { Component } from 'react'
import css from './css/DataMount.module.css'


export class DomChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: "Child Loading..."
         
      }
    }

    getData = () => {
       this.setState(
        prevState => {
            return{
                data: prevState.data === "Child Loading..." ? "Child Loaded!" : "Child Loading..."
            }
        }
       )
    }
    
  render() {
    return (
      <div className={css.DataMount}>
        {this.state.data}
        <button onClick={this.getData}>Get Data</button>
      </div>
      
      )
  }
}

export default DomChild