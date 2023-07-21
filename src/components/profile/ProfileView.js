

import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProfileView = () => {

    const [params]=useSearchParams();
    
  return (
    <div>Profile Name :{params.get('name')}</div>
  )
}

export default ProfileView