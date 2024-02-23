import React from 'react'

function BooksInfo() {

    const booksInformation = [
        {
          name: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          yearOfPublication: 1960
        },
        {
          name: '1984',
          author: 'George Orwell',
          yearOfPublication: 1949
        },
        {
          name: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          yearOfPublication: 1925
        },
        {
          name: 'Pride and Prejudice',
          author: 'Jane Austen',
          yearOfPublication: 1813
        }
      ];
  return (
   <div>
     {booksInformation.map(info =>{
        return (
            <div key={info.name}>
            <h5>{info.name}</h5>
            <p>{info.author}</p>
            <p>{info.yearOfPublication}</p>
        </div>
        )
    })}
   </div>
  )
}

export default BooksInfo