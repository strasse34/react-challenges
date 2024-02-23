import React, {useState} from 'react'

const ExitEnter =() => {
    const [isLoggedout, setLoggedout] = useState(true);

    const handelClick = () => {
        setLoggedout = (false);
        
    }

    return (
        <div>
            <p>{isLoggedout ? "Goodbye" : "Hello"}</p>
            <button onClick={handelClick}>
                {isLoggedout ? 'Enter' : 'Exit'}
            </button>
        </div>
    );
}

export default ExitEnter;