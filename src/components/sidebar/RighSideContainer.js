

import React from 'react'
import AdComponent from './AdComponent'
import News from './News'

const RighSideContainer = () => {
  return (
    <div className='pt-4 px-4'>
      <News/>
      <div className='pt-2 sticky top-20'>
      <AdComponent/>
      </div>
      
    </div>
  )
}

export default RighSideContainer