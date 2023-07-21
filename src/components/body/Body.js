
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LeftSideContainer from '../sidebar/LeftSideContainer'
import RighSideContainer from '../sidebar/RighSideContainer'

const Body = () => {

  const showSuggestion=useSelector(store=>store.search.showSearch);


  return (
    <div className={`flex pt-2 ${showSuggestion?'bg-slate-600 w-full h-full bg-opacity-50 transition-all duration-1000':'bg-gray-100' }`}>
        <>
       
          <Outlet/>
         <RighSideContainer/>
        
        </>
    </div>
  )
}

export default Body