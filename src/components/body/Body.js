
import React from 'react'
import LeftSideContainer from '../sidebar/LeftSideContainer'
import RighSideContainer from '../sidebar/RighSideContainer'
import BodyContainer from './BodyContainer'

const Body = () => {
  return (
    <div className='flex  bg-gray-100 pt-2'>
        <>
         <LeftSideContainer/>
         <BodyContainer/>
         <RighSideContainer/>
        
        </>
    </div>
  )
}

export default Body