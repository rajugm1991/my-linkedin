

  import React from 'react'
  import ProfileCard from './ProfileCard'
  import RecentPost from './RecentPost'

  const LeftSideContainer = () => {
    return (
      <div className='pl-36 lg:pl-36 xl:pl-36 xxl:pl-80 pr-4 pt-4'>
          <ProfileCard/>
          <div className='pt-2 sticky top-20 '>
          <RecentPost/>
        
          </div>
          
      </div>
    )
  }

  export default LeftSideContainer