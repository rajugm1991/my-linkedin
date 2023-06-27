

import React from 'react'
import ProfileCard from './ProfileCard'
import RecentPost from './RecentPost'

const LeftSideContainer = () => {
  return (
    <div className='px-40 pt-4'>
        <ProfileCard/>
        <div className='pt-2 sticky top-20 '>
        <RecentPost/>
       
        </div>
        
    </div>
  )
}

export default LeftSideContainer