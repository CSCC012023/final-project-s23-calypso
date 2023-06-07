import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';



function App() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);


  const getTexts = async () => {
    const response = await fetch('http://localhost:8080/api/texts/retrieve');
    const data = await response.json();
    //console.log(data);
    const texts = data.text.map((item: { text: any; }) => item.text);
    //console.log(texts);
    setTexts(texts);

    if (response.ok){
      console.log('Response worked!');
    }
    else{
      console.log('Response failed!');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send a POST request to the server with the entered text
    const request = new Request('http://localhost:8080/api/texts/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    fetch(request).then((response) => {
      if (response.ok) {
        // If the response is ok (server returns 200), update the texts state
        console.log('Response worked!');
      }
      else{
        console.log('Response failed!');
      }
    });
  }
  

  useEffect(() => {
    // Get the initial texts when the component mounts
    getTexts();
  }, []);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React App - Database Request/Response Testing</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
        <button type="submit">Submit Text</button> 
      </form>

      <div>
        <button onClick={ getTexts }>Fetch Data from Database</button>
        <h2>All Texts from Database:</h2>
        {texts?.map((text => <p>{ text }</p>))}
      </div>
    </div>
  );
}

export default App;