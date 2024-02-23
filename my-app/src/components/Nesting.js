import React, { Component } from 'react'
import SignIn from './SignIn'
import ButtonChanger from './ButtonChanger'


export class Nesting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedin: false,
      }
      
    }

    clickHandler=()=> {
        if (this.state.isLoggedin) {
          this.setState({ isLoggedin: false });
        } else {this.setState({ isLoggedin: true })}
        console.log(this)
      }

  render() {
    return (
      <div>
            
            <SignIn isLoggedin={this.state.isLoggedin}/>
            <ButtonChanger 
            isLoggedin={this.state.isLoggedin}
            clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

export default Nesting