
import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSideContainer from '../sidebar/LeftSideContainer'
import RighSideContainer from '../sidebar/RighSideContainer'

const Body = () => {
  return (
    <div className='flex  bg-gray-100 pt-2'>
        <>
         <LeftSideContainer/>
          <Outlet/>
         <RighSideContainer/>
        
        </>
    </div>
  )
}

export default Body