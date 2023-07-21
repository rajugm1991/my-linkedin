

import React from 'react'
import { Outlet } from 'react-router-dom'

const OutletComponent = () => {
  return (
    <div className='h-auto w-[57rem]'><Outlet/></div>
  )
}

export default OutletComponent