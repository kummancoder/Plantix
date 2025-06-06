import React from 'react'
import MiniCard1 from './MiniCard1'
import MiniCard2 from './MiniCard2'

const MiniCards = () => {
  return (
    <div className='max-w-screen-xl mx-auto  flex justify-between items-center '>
        <MiniCard1/>
        {/* <MiniCard1/> */}
        <MiniCard2/>
    </div>
  )
}

export default MiniCards