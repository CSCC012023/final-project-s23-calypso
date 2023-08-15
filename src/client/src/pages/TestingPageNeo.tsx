import React, { useState, useEffect, FormEvent } from 'react';


function TestingPageNeo() {
    const [text, setText] = useState('');
    const [texts, setTexts] = useState([]);
    const [nodes, setNodes] = useState([]);


    const getTexts = async () => {
        window.alert('getTexts() called!');

        fetch('http://localhost:8081/api/neo4j/artworks/test')
            .then((response) => response.json())
            .then((data) => {
                setNodes(data);
            })
            .catch((error) => {
                console.error('Error retrieving nodes:', error);
            }
        );;
    };


    useEffect(() => {
        // Get the initial texts when the component mounts
        getTexts();
    }, []);


    return (
        <div>
            <h1 className="text-2xl font-bold">React App - Database Request/Response Testing</h1>
            
            <div>
                <button onClick={getTexts}>Fetch Data from Database</button>
                <h2 className="text-2xl font-bold">All Texts from Database:</h2>
                {nodes?.map((node => <p>{node}</p>))}
            </div>
        </div>
    );
}

export default TestingPageNeo;