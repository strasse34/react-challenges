import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("clicked on Class Component")
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click me - Class Component</button>
    )
  }
}

export default EventsClass