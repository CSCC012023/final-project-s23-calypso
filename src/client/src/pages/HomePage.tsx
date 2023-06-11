import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'

type Props = {}

function HomePage({}: Props) {
  return (
    <div className="bg-darkestGrey h-screen" >
      <HeaderNavBar />
    </div>
  );
}

export default HomePage