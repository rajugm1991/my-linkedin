

import React from 'react'
import MessageFeed from './MessageFeed'

function FeederList() {
  return (
    <div>
        <MessageFeed type={'image'}/>
        <MessageFeed type={'video'}/>
        <MessageFeed type={'image'}/>
        <MessageFeed/>
    </div>
  )
}

export default FeederList