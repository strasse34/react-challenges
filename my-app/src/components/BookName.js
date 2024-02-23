import React from 'react'

function BookName() {
    const bookList=[
        'To Kill a Mockingbird',
        '1984',
        'The Great Gatsby',
        'Pride and Prejudice',
        'The Catcher in the Rye',
        'One Hundred Years of Solitude',
        'Brave New World',
        'The Hobbit',
        'The Lord of the Rings',
        'Harry Potter and the Sorcerer\'s Stone'
    ]
  
    return (
        <div>
            {bookList.map(book => {
            return <h1 key={book}>{book}</h1>
            })}
        </div>
  )
}

export default BookName