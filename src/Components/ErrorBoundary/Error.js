import React from 'react';
import './ErrorBoundary.css'

const Error = () => {
    return (
        <div className="err-backdrop">
            <div className="error-text">
                <h2 className="error"> There was an error while processing request.</h2>
                <ul>
                    <li>Check if internet is connected.</li>
                    <li>Try refreshing the page
                        <button onClick={() => window.location.href = window.location}>Refresh</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Error; 