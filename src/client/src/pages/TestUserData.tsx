import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TestUserData() {
  const location = useLocation();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const { state } = location;

    if (!state || !state.token) {
      console.error('Token not found in location state.');
      return;
    }

    // Send a POST request to the server with the token to retrieve user data
    const request = new Request('http://localhost:8080/api/users/collect-user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: state.token,
      }),
    });

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          throw new Error('User data not found!');
        } else {
          throw new Error('Internal Server Error');
        }
      })
      .then((data) => {
        console.log(data); // Log the retrieved data
        setUserData(data.data); // Save the retrieved data in state
      })
      .catch((error) => {
        console.error(error);
      });

  }, [location]);

  return (
    <div>
      {userData && <h1>Hello {userData.firstName} {userData.lastName}</h1>}
      {userData && <h2>Your email is {userData.email}</h2>}
    </div>
  );
}

export default TestUserData;
