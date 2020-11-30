import React from 'react';

class NotFound extends React.Component{
    render(){
        return(
            <div className="err-backdrop">
                <div className="error-text">
                    <h2 className="error"> No such page found !</h2>
                    <ul>
                        <li>Check if page url and params are correct.</li>
                        <li>Go to home page
                            <button onClick={() => window.location.href = '/'}>Home</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NotFound;