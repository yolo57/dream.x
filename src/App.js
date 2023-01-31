import React, { useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ message }),
        })
        .then ((res) => res.json())
        .then ((data) => setResponse(data.message));
    };

    return (
        <div className="App">
          <h1>Text2Date</h1>
            <form onSubmit={handleSubmit}>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              ></textarea>
              <button type="submit">submit</button>
            </form> 
            {response && <div>{response}</div> }
        </div>
    );
}

export default App;
