import React, { useState } from 'react'

function ControlledComponentHook() {
  const [name, setName] = useState('Your Name')
  const [grade, setGrade] = useState('grade 7')
  const [comment, setComment] = useState('Comment')

  const SubmitHandler = (e)=> {
    e.preventDefault();
    console.log(name, grade, comment)
  }

  
  return (
    <div>
      <h2>Please Fill Below Form:</h2>
      <form onSubmit={SubmitHandler}>
          <div>
            <label htmlFor='id-name'>Your Name:</label>
            <input 
                id='id-name' 
                value={name} 
                type='text' 
                name='name'
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='id-grade'>Select Grade:</label>              
            <select 
              id='id-grade' 
              name='grade' 
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            
            ></textarea>
          </div>
          
          
          <input type='submit' value= 'submit' />
      </form>
    </div>
  )

}

export default ControlledComponentHook