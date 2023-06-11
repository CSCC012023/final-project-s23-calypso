import React from 'react'
import ExampleNavBar from '../components/common/HeaderNavBar'

type Props = {}

function HomePage({}: Props) {
  return (
    <div className="App">
      <ExampleNavBar />
    </div>
  );
}

export default HomePage