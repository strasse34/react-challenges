import React, { Component } from 'react'


export class ControlledComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         grade: "",
         comment: "Comment",
      }
    }

    HandleNameChange = (event)=> {
        
        this.setState({
          name: event.target.value
        })
        
    }
    HandleGradeChange = (event)=> {
        
        this.setState({
          grade: event.target.value
        })
        
    }
    HandleCommentChange = (event)=> {
        
        this.setState({
          comment: event.target.value
        })
        
    }

    SubmitHandler = (event) => {
      event.preventDefault();
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please Fill Below Form:</h2>
        <form onSubmit={this.SubmitHandler}>
            <div>
              <label htmlFor='id-name'>Your Name:</label>
              <input 
                  id='id-name' 
                  value={this.state.name} 
                  type='text' 
                  name='name'
                  onChange={this.HandleNameChange}
              />
            </div>
            <div>
              <label htmlFor='id-grade'>Select Grade:</label>              
              <select 
                id='id-grade' 
                name='grade' 
                value={this.state.grade}
                onChange={this.HandleGradeChange}
                
                >
                <option value='grade 7'>grade 7</option>
                <option value='grade 8'>grade 8</option>
                <option value='grade 9'>grade 9</option>
              </select>
            </div>
            <div>
              <label htmlFor='id-comment'>Comment</label>
              <textarea 
              id='id-comment' 
              name='comment' 
              value={this.state.comment}
              onChange={this.HandleCommentChange}
              
              ></textarea>
            </div>
            
            
            <input type='submit' value= 'submit' />
        </form>
      </div>
    )
  }
}

export default ControlledComponent